# urls.py
from django.conf.urls.static import static
from django.conf import settings
from django.urls import path
from .views import MapaList, MapaDetail, MapaUpload, MapaDownload

urlpatterns = [
    path('api/mapas/', MapaList.as_view(), name='mapa-list'),
    path('api/mapas/<int:pk>/', MapaDetail.as_view(), name='mapa-detail'),
    path('api/mapas/upload/', MapaUpload.as_view(), name='mapa-upload'),
    path('api/mapas/download/<int:pk>/', MapaDownload.as_view(), name='mapa-download'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)