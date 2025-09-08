# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsuarioViewSet, TarefaViewSet

# Criando o roteador
router = DefaultRouter()
router.register(r'usuarios', UsuarioViewSet)
router.register(r'tarefas', TarefaViewSet)

# Incluindo as rotas
urlpatterns = [
    path('', include(router.urls)),
]
