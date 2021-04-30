from django.contrib import admin
from django.urls import path, include
from .views import *


urlpatterns = [
    path('movies/', MoviesView.as_view()),
    path('movies/<int:id>/', MoviesDetails.as_view()),
    path('movies/mostviewes/', topmovies),
    path('actors/', actorsList),
    path('actors/<int:id>/', actorDetail),
    path('directors/', directorList),
    path('directors/<int:id>/', directorDetail),
    path('profile/', user_profile),
    path('wishlist/', wish_list),
    path('genres/movie/', genre_movies),
    # path('movies/filter/', MoviesViewFilter.as_view())
]
