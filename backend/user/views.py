from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import AccountSerializer
from .models import Account


@api_view(['POST', 'GET'])
def register_view(request):
    if request.method == "POST":
        serializer = AccountSerializer(data = request.data)
        data = {}
        if serializer.is_valid():
            account = serializer.save()
            data['response'] = "successfully registered account"
        else:
            data = serializer.errors
        return Response(data)
    # if request.method == "GET":
    #     user = Account.objects.get(id)
    #     serializer = AccountSerializer(data = user)
    #     if serializer.is_valid():

