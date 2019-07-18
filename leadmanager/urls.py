
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.views.static import serve

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('leads.urls')),
    path('', include('accounts.urls')),
    path('', include('system.urls')),
    path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT,})
]
