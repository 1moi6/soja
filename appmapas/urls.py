from django.urls import path
from .views import criar_mapa, faz_login, faz_upload, hello_word

urlpatterns = [
    # ... outras URLs ...
    path('criar-mapa/', criar_mapa, name='criar_mapa'),
    path('faz-login/', faz_login, name='faz_login'),
    path('faz-upload/', faz_upload, name='faz_upload'),
    path('hello-word/', hello_word, name='hell_word')
]