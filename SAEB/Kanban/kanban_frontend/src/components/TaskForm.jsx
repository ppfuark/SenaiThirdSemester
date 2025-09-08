import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { taskService, userService } from '../services/api';
import '../styles/main.scss';

const taskSchema = z.object({
  usuario: z.string().min(1, 'Usuário é obrigatório'),
  descricao: z.string().min(1, 'Descrição é obrigatória'),
  setor: z.string().min(1, 'Setor é obrigatório'),
  prioridade: z.enum(['baixa', 'media', 'alta'], {
    errorMap: () => ({ message: 'Prioridade é obrigatória' })
  }),
});

const TaskForm = ({ editingTask, onSaveComplete }) => {
  const [users, setUsers] = useState([]);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    resolver: zodResolver(taskSchema)
  });

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
      setValue('usuario', editingTask.usuario);
      setValue('descricao', editingTask.descricao);
      setValue('setor', editingTask.setor);
      setValue('prioridade', editingTask.prioridade);
    }
  }, [editingTask, setValue]);

  const onSubmit = async (data) => {
    try {
      if (editingTask) {
        await taskService.update(editingTask.id, data);
      } else {
        await taskService.create(data);
      }
      alert('Cadastro concluído com sucesso');
      reset();
      if (onSaveComplete) onSaveComplete();
    } catch (error) {
      console.error('Erro ao salvar tarefa:', error);
      alert('Erro ao salvar tarefa');
    }
  };

  return (
    <div className="task-form">
      <h2 className="task-form__title">{editingTask ? 'Editar Tarefa' : 'Nova Tarefa'}</h2>
      <form className="task-form__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="task-form__field">
          <label htmlFor="usuario" className="task-form__label">Usuário</label>
          <select 
            id="usuario" 
            className={`task-form__select ${errors.usuario ? 'error' : ''}`}
            {...register('usuario')}
          >
            <option value="">Selecione um usuário</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.nome}</option>
            ))}
          </select>
          {errors.usuario && <span className="task-form__error">{errors.usuario.message}</span>}
        </div>
        
        <div className="task-form__field">
          <label htmlFor="descricao" className="task-form__label">Descrição</label>
          <textarea 
            id="descricao" 
            rows="4"
            className={`task-form__textarea ${errors.descricao ? 'error' : ''}`}
            {...register('descricao')}
          />
          {errors.descricao && <span className="task-form__error">{errors.descricao.message}</span>}
        </div>
        
        <div className="task-form__field">
          <label htmlFor="setor" className="task-form__label">Setor</label>
          <input 
            type="text" 
            id="setor" 
            className={`task-form__input ${errors.setor ? 'error' : ''}`}
            {...register('setor')}
          />
          {errors.setor && <span className="task-form__error">{errors.setor.message}</span>}
        </div>
        
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
        
        <button type="submit" className="task-form__submit">
          {editingTask ? 'Atualizar' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;