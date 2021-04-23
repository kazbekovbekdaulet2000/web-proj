from rest_framework import serializers
from .models import *

class AccountSerializer(serializers.ModelSerializer):

    password2 = serializers.CharField(style= {'input_type' : 'password'}, write_only = True) #min_length = 8

    class Meta:
        model = Account
        fields = ['email', 'name', 'surname', 'username', 'password', 'password2']
        extra_fields= {
            'password': {'write_only': True}
        }

    def save(self):
        account =Account(
            email = self.validated_data['email'],
            name = self.validated_data['name'],
            surname = self.validated_data['surname'],
            username = self.validated_data['username']
        )
        password = self.validated_data['password']
        password2 = self.validated_data['password2']
        
        if password != password2:
            raise serializers.ValidationError({'password': 'Password must match'})
        account.set_password(password)
        account.save()