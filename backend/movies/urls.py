from django.contrib import admin
from django.urls import path, include
from .views import *
from rest_framework import routers

# 

urlpatterns = [
    path('movies/', moviesView),
    path('movies/<int:id>/', moviesDetail),
    path('actors/', actorsList),
    path('actors/<int:id>/', actorDetail),
    path('directors/', directorList),
    path('directors/<int:id>/', directorDetail),
]
