from rest_framework import serializers
from .models import *


class ActorSerizalizer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields =(
            'name', 'birth_date', 'death_date', 'county', 'person_details', 'awards', 'award_nominations', 'link'
        )

class DirectorSerizalizer(serializers.ModelSerializer):
    class Meta:
        model = Director
        fields ='__all__'

class MoviesSerizalizer(serializers.ModelSerializer):
    # actor = serializers.StringRelatedField(many = False) #should be more than one actor
    # director = serializers.StringRelatedField(many = False)
    class Meta:
        model = Movies
        fields ='__all__'