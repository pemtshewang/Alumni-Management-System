from email.policy import default
from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin
from .managers import AlumniManager

class Alumni(AbstractBaseUser,PermissionsMixin):
    first_name = models.CharField(max_length=100,null=False)
    last_name = models.CharField(max_length=100, null=True, default="")
    cid_Number = models.CharField(max_length=100,unique=True)
    email = models.EmailField(max_length=100,unique=True)
    password = models.CharField(max_length=100, null=False)
    company = models.CharField(max_length=100,default="No company")
    job_profile = models.CharField(max_length=100,null=True,default="Not Working")
    profile_image = models.ImageField(upload_to="users/",default="users/default.png",max_length=500)
    graduation_year = models.DateField(null=False)
    is_staff = models.BooleanField(default=False) # access to admin site
    is_superuser = models.BooleanField(default=True)# access to all permissions
    is_active = models.BooleanField(default=True) 
    date_joined = models.DateTimeField(auto_now=True)
    last_login = models.DateTimeField(auto_now=True)
    is_admin = models.BooleanField(default=False)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name","cid_Number",]

    objects = AlumniManager()

    def __str__(self) -> str:
        return self.first_name
