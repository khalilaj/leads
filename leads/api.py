from rest_framework import viewsets, permissions
from .models import Leads
from .serializer import LeadSerializer

class LeadViewset (viewsets.ModelViewSet):
    queryset = Leads.objects.all()
    permissions = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer