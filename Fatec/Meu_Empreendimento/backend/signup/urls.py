from django.urls import path
from signup import views

urlpatterns = [
    path('signup/', views.signup_view, name='signup'),    
]
