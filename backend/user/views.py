from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
# from .serializer import AccountSerializer
from .models import Account
from .serializer import AccountSerializer


@api_view(['POST'])
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