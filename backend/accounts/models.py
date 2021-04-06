from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Provider(User):
    name = models.CharField(max_length = 100, null = False, default = '') 
    surname = models.CharField(max_length = 100, null = False, default = '') 