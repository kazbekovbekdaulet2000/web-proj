from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Account
from .serializer import AccountSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response


#FBV
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

# NO    
# class CustomAuthToken(ObtainAuthToken):
#     def post(self, request, *args, **kwargs):
#         serializer = self.serializer_class(data=request.data,
#                                            context={'request': request})
#         serializer.is_valid(raise_exception=True)
#         user = serializer.validated_data['user']
#         token, created = Token.objects.get_or_create(user=user)
#         return Response({
#             'token': token.key,
#             'user_id': user.pk,
#             'email': user.email
#         })