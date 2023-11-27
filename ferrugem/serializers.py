# serializers.py
from rest_framework import serializers
from .models import Mapa


class MapaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mapa
        fields = ('id', 'nome', 'mapa')