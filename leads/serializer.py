from .models import Leads
from rest_framework import serializers

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Leads
        fields = '__all__'