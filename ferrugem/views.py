from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Mapa
from .serializers import MapaSerializer

class MapaList(generics.ListAPIView):
    queryset = Mapa.objects.all()
    serializer_class = MapaSerializer
    
class MapaDetail(generics.RetrieveAPIView):
    queryset = Mapa.objects.all()
    serializer_class = MapaSerializer
    permission_classes = [permissions.IsAuthenticated]

class MapaUpload(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, *args, **kwargs):
        print(request.data)
        serializer = MapaSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)

        return Response(serializer.errors, status=400)

class MapaDownload(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, pk, *args, **kwargs):
        mapa = generics.get_object_or_404(Mapa, pk=pk)
        serializer = MapaSerializer(mapa)
        return Response(serializer.data)