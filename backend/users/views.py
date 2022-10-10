from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from .serializers import AlumniSerializer
from .models import Alumni
from rest_framework.permissions import AllowAny

# With viewsets always use router

class UserViewSet(ModelViewSet):
    queryset = Alumni.objects.all()
    serializer_class = AlumniSerializer
    permission_classes = [AllowAny]
