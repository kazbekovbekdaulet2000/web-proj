from django.urls import path
from .views import *
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token 

urlpatterns = [
    path('register/', register_view),
    path('token/', obtain_jwt_token),
]