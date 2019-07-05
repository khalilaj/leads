from django.db import models

# Create your models here.
class Leads(models.Model):
    name = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(unique = True, max_length=254)
    message = models.CharField(max_length=255)
    created_at = models.DateField(auto_now_add=True)