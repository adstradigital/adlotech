from django.urls import path
from .views import ServiceListAPIView, ContactCreateAPIView

urlpatterns = [
    path('services/', ServiceListAPIView.as_view(), name='service-list'),
    path('contact/', ContactCreateAPIView.as_view(), name='contact-create'),
]
