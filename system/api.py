from rest_framework import viewsets, permissions
from .models import System
from .serializer import SystemSerializer

class SystemViewset (viewsets.ModelViewSet):
    queryset = System.objects.all()
    permissions = [
        permissions.AllowAny
    ]
    serializer_class = SystemSerializer