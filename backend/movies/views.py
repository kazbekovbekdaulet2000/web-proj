from django.shortcuts import get_object_or_404, render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .models import *
from .serializers import *
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.forms import UserCreationForm
from rest_framework import status


class MoviesView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        movies = Movies.objects.all()
        serializer = MoviesSerizalizer(movies, many = True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = MoviesSerizalizer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MoviesDetails(APIView):
    def get(self, request, id):
        try:
            movie = Movies.objects.get(movies_id = id)
        except Movies.DoesNotExist as e:
            return Response({'message': str(e)}, status = 400)
        serializer = MoviesSerizalizer(movie, many = False)
        return Response(serializer.data)

    def put(self, request, id):
        try:
            movie = Movies.objects.get(movies_id = id)
        except Movies.DoesNotExist as e:
            return Response({'message': str(e)}, status = 400)
        serializer = MoviesSerizalizer(movie, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.error, status = status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        try:
            movie = Movies.objects.get(movies_id = id)
        except Movies.DoesNotExist as e:
            return Response({'message': str(e)}, status = 400)
        movie.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)

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