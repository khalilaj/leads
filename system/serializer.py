from .models import System
from rest_framework import serializers

class SystemSerializer(serializers.ModelSerializer):
    class Meta:
        model = System
        fields = '__all__'