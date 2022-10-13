from django.shortcuts import render
from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly
from .serializers import AlumniListSerializer
from .models import Alumni
from .serializers import MyTokenObtainPairSerializer, AlumniCreateSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework import filters
from rest_framework.permissions import AllowAny
from rest_framework.parsers import MultiPartParser,FormParser,JSONParser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

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
    search_fields = ['first_name', 'last_name', 'email']

    def get_queryset(self):
        queryset_list = Alumni.objects.all()
        return queryset_list.filter(is_staff=False)


# create api view for registering alumni
class AlumniRegisterView(APIView):
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser,FormParser]
    def post(self, request, format=None):
        print(request.data)
        serializer = AlumniCreateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)