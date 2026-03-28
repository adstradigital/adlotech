# from django.shortcuts import render

# Create your views here.
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Service, ContactMessage
from .serializers import ServiceSerializer, ContactMessageSerializer

class ServiceListAPIView(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ContactCreateAPIView(APIView):
    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {'message': 'Contact message sent successfully!'},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    