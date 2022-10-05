import email
from email.policy import default
from enum import unique
from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin

class Alumni(AbstractBaseUser, PermissionsMixin):

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.IntegerField(default=0,null=False)
    email = models.CharField(max_length=200, unique=True)
    password = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=10, unique=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    # objects = 

    USER_NAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name","phone_number"]


    def __str__(self) -> str:
        return self.email