from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('contact.html', views.contact, name='contact'),
    path('services.html', views.services, name='services'),
    path('index.html', views.index, name='index'),
]
