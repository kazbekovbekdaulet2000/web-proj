from rest_framework import serializers
from .models import *
from django.conf import settings

class ActorSerizalizer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields ='__all__'

class DirectorSerizalizer(serializers.ModelSerializer):
    class Meta:
        model = Director
        fields ='__all__'

class MoviesSerizalizer(serializers.ModelSerializer):
    class Meta:
        model = Movies
        fields ='__all__'

class GenresSerializer(serializers.Serializer):
    name = serializers.CharField(read_only = True)
    description = serializers.CharField(read_only = True)
    
    def create(self, validated_data):
        return Genres.objects.create(**validated_data)

    def update(self, validated_data, instance):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)


# # Auth and User creation
# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ('username', 'email',)

#     def create(self, validated_data):
#         user = User(
#             email=validated_data['email'],
#             username=validated_data['username']
#         )
#         user.set_password(validated_data['password'])
#         user.is_active = True
#         user.save()
#         return user


# class UserProfileSerializer(serializers.ModelSerializer):
#     # movies_list = serializers.PrimaryKeyRelatedField(many = True, read_only=True)
#     # genre_list = serializers.PrimaryKeyRelatedField(many = True, read_only=True)
#     class Meta:
#         model = settings.AUTH_USER_MODEL
#         fields = ('email', 'name', 'surname', 'username', 'is_superuser')