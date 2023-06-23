"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/

"""
from django.contrib import admin
from django.urls import include
from django.urls import path
from login import views

urlpatterns = [    
    path('login/', views.login_view, name='login'),
]
