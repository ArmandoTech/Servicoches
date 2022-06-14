from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('contacto', views.contact, name='contact'),
    path('servicios', views.services, name='services'),
    path('home', views.index, name='index'),
]
