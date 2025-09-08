import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { userService } from '../services/api';
import '../styles/main.scss';

const userSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
});

const UserForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(userSchema)
  });

  const onSubmit = async (data) => {
    try {
      await userService.create(data);
      alert('Cadastro concluído com sucesso');
      reset();
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      alert('Erro ao cadastrar usuário');
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
          />
          {errors.email && <span className="user-form__error">{errors.email.message}</span>}
        </div>
        
        <button type="submit" className="user-form__submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default UserForm;