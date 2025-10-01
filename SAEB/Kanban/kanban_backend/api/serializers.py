from rest_framework import serializers
from .models import Usuario, Tarefa

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'nome', 'email']

class TarefaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarefa
        fields = ['id', 'usuario', 'descricao', 'setor', 'prioridade', 'status', 'data_cadastro']