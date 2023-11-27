from django.db import models

class Mapa(models.Model):
    nome = models.CharField(max_length=255)
    mapa = models.ImageField(upload_to='mapas/')

    def __str__(self):
        return self.nome
