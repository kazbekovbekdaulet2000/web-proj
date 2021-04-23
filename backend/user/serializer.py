from rest_framework import serializers
from .models import *

class AccountSerializer(serializers.ModelSerializer):

    password = serializers.CharField(style= {'input_type' : 'password'}, write_only = True) #min_length = 8

    class Meta:
        model = Account
        fields = ['email', 'name', 'surname', 'username', 'password']
        extra_fields= {
            'password': {'write_only': True}
        }