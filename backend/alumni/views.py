from django.shortcuts import render
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly
from .serializers import AlumniListSerializer
from .models import Alumni
from .serializers import MyTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework import filters

class AlumniListViewSet(ReadOnlyModelViewSet):
    queryset = Alumni.objects.all()
    authentication_classes = []
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    serializer_class = AlumniListSerializer

    def get_queryset(self):
        queryset_list = Alumni.objects.all()
        return queryset_list.filter(is_staff=False)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class SearchAlumniView(generics.ListAPIView):
    queryset = Alumni.objects.all()
    serializer_class = AlumniListSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['first_name','last_name','email']

    def get_queryset(self):
        queryset_list = Alumni.objects.all()
        return queryset_list.filter(is_staff=False)