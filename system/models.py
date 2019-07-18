from django.db import models

# Create your models here.
class System(models.Model):
    system_name = models.CharField(max_length=255, blank=True, null=True)
    system_photo = models.ImageField(upload_to='system_photos', verbose_name="system-logo", name=None, blank=True)
    system_description = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now=True)
    updated_on = models.DateTimeField(auto_now_add=True)

    