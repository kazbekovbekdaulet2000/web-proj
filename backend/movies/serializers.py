from rest_framework import serializers
from .models import *
from django.conf import settings
from django.contrib.auth import get_user_model

class ActorSerizalizer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields ='__all__'

class DirectorSerizalizer(serializers.ModelSerializer):
    class Meta:
        model = Director
        fields = '__all__'

class GenresSerializer(serializers.Serializer):
    name = serializers.CharField(read_only = True)
    description = serializers.CharField(read_only = True)
    def create(self, validated_data):
        return Genres.objects.create(**validated_data)
    def update(self, validated_data, instance):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)


class MoviesSerizalizer(serializers.ModelSerializer):
    # genres = serializers.ManyRelatedField(GenresSerializer)
    # director = serializers.PrimaryKeyRelatedField(DirectorSerizalizer)
    class Meta:
        model = Movies
        fields ='__all__'

class ProfileSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Profile
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    # profile = serializers.PrimaryKeyRelatedField(many = False, queryset = Profile.objects.all())
    class Meta:
        model = get_user_model()
        fields = ('id', 'email', 'name', 'surname', 'username', 'is_superuser')
