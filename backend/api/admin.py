# from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Service, ContactMessage

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_at']
    search_fields = ['title']

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'created_at']
    search_fields = ['name', 'email']
    