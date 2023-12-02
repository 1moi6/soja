from django.shortcuts import render, redirect
from .forms import MapaForm
from django.contrib.auth.decorators import login_required

@login_required
def criar_mapa(request):
    if request.method == 'POST':
        form = MapaForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('criar_mapa')  # Substitua pelo nome da sua página inicial
    else:
        form = MapaForm()

    return render(request, 'appmapas/criar_mapa.html', {'form': form})


def faz_login(request):
    return render(request, 'appmapas/fazlogin.html')

def faz_upload(request):
    return render(request, 'appmapas/fazupload.html')

def hello_word(request):
    return render(request, 'appmapas/helloword.html')