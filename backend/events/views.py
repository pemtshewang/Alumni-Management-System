from datetime import datetime
from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly
from .serializers import EventListSerializer
from .models import Event
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.generics import ListAPIView

class EventViewSet(ModelViewSet):
    queryset = Event.objects.all()
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    authentication_classes = []
    serializer_class = EventListSerializer

class EventStatusFilter(ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventListSerializer

    def get_queryset(self):
        return Event.objects.all().filter(date__gte=datetime.today())

