from django import forms
from ferrugem.models import Mapa

class MapaForm(forms.ModelForm):
    class Meta:
        model = Mapa
        fields = ['nome', 'mapa']