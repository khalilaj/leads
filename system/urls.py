from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('api/system/', views.SystemView.as_view(), name= 'system_list'),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)