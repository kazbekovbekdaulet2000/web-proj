from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

class CustomUserManager(BaseUserManager):
    def create_superuser(self, email, name, surname, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, name, surname, password, username, **extra_fields)
            
    def create_user(self, email, name, surname, username, password=None, **extra_fields):
        if not email:
            raise ValueError("User must have an email")
        if not password:
            raise ValueError("User must have a password")
        if not name:
            raise ValueError("User must have a first name")
        if not surname:
            raise ValueError("User must have a last name")

        email = self.normalize_email(email)
        user = self.model(email=email, name = name, 
                        surname = surname, username = username, 
                        **extra_fields)
        user.set_password(password)
        user.save()
        return user
        


class Account(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length = 255, unique=True)
    name = models.CharField(max_length = 255)
    surname = models.CharField(max_length = 255)
    username = models.CharField(max_length = 255, default = 'user')
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default = False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name','surname', 'username']

    def __str__(self):
        return self.email

    def get_name(self):
        return self.name
    
    def get_surname(self):
        return self.surname

    def get_full_name(self):
        return ' '.join(self.name, self.surname)