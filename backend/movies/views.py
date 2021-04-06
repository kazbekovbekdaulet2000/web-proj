from django.shortcuts import get_object_or_404, render
from rest_framework.response import Response
from rest_framework.decorators import api_view 
from .models import *
from .serializers import *

# Movies 
@api_view(['GET'])
def moviesView(request):
    movies = Movies.objects.all()
    serializer = MoviesSerizalizer(movies, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def moviesDetail(request, id):
    movie = Movies.objects.get(movies_id = id)
    serializer = MoviesSerizalizer(movie, many = False)
    return Response(serializer.data)
# Actor
@api_view(["GET"])
def actorsList(request):
    actors = Actor.objects.all()
    serializer = ActorSerizalizer(actors, many =True)
    return Response(serializer.data)

@api_view(['GET'])
def actorDetail(request, id):
    actor = Actor.objects.get(id = id)
    serializer = ActorSerizalizer(actor, many = False)
    return Response(serializer.date)


# Director
@api_view(["GET"])
def directorList(request):
    directors = Director.objects.all()
    serializer = DirectorSerizalizer(directors, many =True)
    return Response(serializer.data)

@api_view(['GET'])
def directorDetail(request, id):
    director = Director.objects.get(id = id)
    serializer = DirectorSerizalizer(director, many = False)
    return Response(serializer.date)
