import React from 'react';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { userService } from '../services/api';
import '../styles/main.scss';

// Regex para validações
const nameRegex = /^[A-Za-zÀ-ÿ\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const noNumbersRegex = /^[^0-9]*$/;

const userSchema = z.object({
  nome: z.string()
    .min(1, 'Nome é obrigatório')
    .max(50, 'Nome deve ter no máximo 50 caracteres')
    .regex(noNumbersRegex, 'Nome não pode conter números')
    .transform((val) => val.trim().replace(/\s+/g, ' '))
    .refine((val) => val.length > 0, 'Nome não pode ser apenas espaços'),
  
  email: z.string()
    .min(1, 'Email é obrigatório')
    .max(50, 'Email deve ter no máximo 50 caracteres')
    .regex(emailRegex, 'Email inválido')
    .transform((val) => val.trim().toLowerCase()),
});

const UserForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm({
    resolver: zodResolver(userSchema)
  });

  const onSubmit = async (data) => {
    try {
      // Aplica trim final antes de enviar
      const processedData = {
        nome: data.nome.trim(),
        email: data.email.trim()
      };
      
      await userService.create(processedData);
      alert('Usuário cadastrado com sucesso!');
      reset();
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      if (error.response?.status === 400) {
        alert('Erro: Email já cadastrado ou dados inválidos');
      } else {
        alert('Erro ao cadastrar usuário');
      }
    }
  };

  return (
    <div className="user-form">
      <h2 className="user-form__title">Cadastro de Usuário</h2>
      <form className="user-form__form" onSubmit={handleSubmit(onSubmit)}>
        <div className="user-form__field">
          <label htmlFor="nome" className="user-form__label">Nome</label>
          <input 
            type="text" 
            id="nome" 
            className={`user-form__input ${errors.nome ? 'error' : ''}`}
            {...register('nome')}
            maxLength={50}
            placeholder="Digite o nome completo"
            onBlur={(e) => {
              e.target.value = e.target.value.trim();
            }}
          />
          {errors.nome && <span className="user-form__error">{errors.nome.message}</span>}
        </div>
        
        <div className="user-form__field">
          <label htmlFor="email" className="user-form__label">Email</label>
          <input 
            type="email" 
            id="email" 
            className={`user-form__input ${errors.email ? 'error' : ''}`}
            {...register('email')}
            maxLength={50}
            placeholder="exemplo@email.com"
            onBlur={(e) => {
              e.target.value = e.target.value.trim().toLowerCase();
            }}
          />
          {errors.email && <span className="user-form__error">{errors.email.message}</span>}
        </div>
        
        <button 
          type="submit" 
          className="user-form__submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Cadastrando...' : 'Cadastrar'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;