
from django.urls import path
from .views import indexView  # the view responsible for the frontend

urlpatterns = [
    path('', indexView),  # add the view to the url
    path('login', indexView),  # add the view to the url
     path('mapa/upload/', indexView),  # add the view to the url
]