from .serializer import SystemSerializer
from .models import System
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
# Create your views here.

class SystemView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        systems = System.objects.all()
        serializer = SystemSerializer(systems, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        systems_serializer = SystemSerializer(data=request.data)
        if systems_serializer.is_valid():
            systems_serializer.save()
            return Response(systems_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', systems_serializer.errors)
            return Response(systems_serializer.errors, status=status.HTTP_400_BAD_REQUEST)