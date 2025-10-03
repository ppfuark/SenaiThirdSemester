import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { taskService, userService } from '../services/api';
import '../styles/main.scss';

// Regex para validações
const sectorRegex = /^[A-Za-zÀ-ÿ\s\-]+$/;
const descriptionRegex = /^[A-Za-zÀ-ÿ0-9\s.,!?\-]+$/;

const taskSchema = z.object({
  usuario: z.string()
    .min(1, 'Usuário é obrigatório'),
  
  descricao: z.string()
    .min(1, 'Descrição é obrigatória')
    .max(300, 'Descrição deve ter no máximo 300 caracteres')
    .regex(descriptionRegex, 'Descrição contém caracteres inválidos')
    .transform((val) => val.trim().replace(/\s+/g, ' '))
    .refine((val) => val.length > 0, 'Descrição não pode ser apenas espaços'),
  
  setor: z.string()
    .min(1, 'Setor é obrigatório')
    .max(50, 'Setor deve ter no máximo 50 caracteres')
    .regex(sectorRegex, 'Setor deve conter apenas letras, espaços e hífens')
    .transform((val) => val.trim().replace(/\s+/g, ' '))
    .refine((val) => val.length > 0, 'Setor não pode ser apenas espaços'),
  
  prioridade: z.enum(['baixa', 'media', 'alta'], {
    errorMap: () => ({ message: 'Prioridade é obrigatória' })
  }),
});

const TaskForm = ({ editingTask, onSaveComplete }) => {
  const [users, setUsers] = useState([]);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue, watch } = useForm({
    resolver: zodResolver(taskSchema)
  });

  const descricaoValue = watch('descricao', '');
  const setorValue = watch('setor', '');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await userService.getAll();
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao carregar usuários:', error);
      }
    };
    
    fetchUsers();
  }, []);

  useEffect(() => {
    if (editingTask) {
      setValue('usuario', String(editingTask.usuario));
      setValue('descricao', editingTask.descricao);
      setValue('setor', editingTask.setor);
      setValue('prioridade', editingTask.prioridade);
    }
  }, [editingTask, setValue]);

  const onSubmit = async (data) => {
    try {
      // Aplica trim final antes de enviar
      const processedData = {
        ...data,
        descricao: data.descricao.trim(),
        setor: data.setor.trim(),
        usuario: parseInt(data.usuario) // Converte para número para o Django
      };

      if (editingTask) {
        await taskService.update(editingTask.id, processedData);
        alert('Tarefa atualizada com sucesso!');
      } else {
        await taskService.create(processedData);
        alert('Tarefa cadastrada com sucesso!');
      }
      reset();
      if (onSaveComplete) onSaveComplete();
    } catch (error) {
      console.error('Erro ao salvar tarefa:', error);
      alert('Erro ao salvar tarefa');
    }
  };

  const sanitizeInput = (value, fieldName) => {
    let sanitized = value.trim().replace(/\s+/g, ' ');
    
    if (fieldName === 'setor') {
      sanitized = sanitized.replace(/[^A-Za-zÀ-ÿ\s\-]/g, '');
    }
    
    return sanitized;
  };

  return (
    <div className="task-form">
      <h2 className="task-form__title">{editingTask ? 'Editar Tarefa' : 'Nova Tarefa'}</h2>
      <form className="task-form__form" onSubmit={handleSubmit(onSubmit)}>
        
        {/* Usuário */}
        <div className="task-form__field">
          <label htmlFor="usuario" className="task-form__label">Usuário</label>
          <select 
            id="usuario" 
            className={`task-form__select ${errors.usuario ? 'error' : ''}`}
            {...register('usuario')}
            disabled={!!editingTask} 
          >
            <option value="">Selecione um usuário</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.nome}</option>
            ))}
          </select>
          {errors.usuario && <span className="task-form__error">{errors.usuario.message}</span>}
        </div>
        
        {/* Descrição */}
        <div className="task-form__field">
          <label htmlFor="descricao" className="task-form__label">Descrição</label>
          <textarea 
            id="descricao" 
            rows="4"
            maxLength={300}
            className={`task-form__textarea ${errors.descricao ? 'error' : ''}`}
            {...register('descricao')}
            placeholder="Descreva a tarefa..."
            onBlur={(e) => {
              e.target.value = sanitizeInput(e.target.value, 'descricao');
            }}
          />
          <div className="task-form__counter">
            {300 - (descricaoValue?.length || 0)} caracteres restantes
          </div>
          {errors.descricao && <span className="task-form__error">{errors.descricao.message}</span>}
        </div>
        
        {/* Setor */}
        <div className="task-form__field">
          <label htmlFor="setor" className="task-form__label">Setor</label>
          <input 
            type="text" 
            id="setor" 
            maxLength={50}
            className={`task-form__input ${errors.setor ? 'error' : ''}`}
            {...register('setor')}
            placeholder="Ex: Desenvolvimento, Marketing..."
            onBlur={(e) => {
              e.target.value = sanitizeInput(e.target.value, 'setor');
            }}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[0-9]/g, '');
            }}
          />
          <div className="task-form__counter">
            {50 - (setorValue?.length || 0)} caracteres restantes
          </div>
          {errors.setor && <span className="task-form__error">{errors.setor.message}</span>}
        </div>
        
        {/* Prioridade */}
        <div className="task-form__field">
          <label htmlFor="prioridade" className="task-form__label">Prioridade</label>
          <select 
            id="prioridade" 
            className={`task-form__select ${errors.prioridade ? 'error' : ''}`}
            {...register('prioridade')}
          >
            <option value="">Selecione a prioridade</option>
            <option value="baixa">Baixa</option>
            <option value="media">Média</option>
            <option value="alta">Alta</option>
          </select>
          {errors.prioridade && <span className="task-form__error">{errors.prioridade.message}</span>}
        </div>
        
        <button 
          type="submit" 
          className="task-form__submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Salvando...' : (editingTask ? 'Atualizar' : 'Cadastrar')}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;