
from django.urls import include, path
from login import views as login_views

urlpatterns = [
   
    path('login/', login_views.login_view, name='login'),
]
