from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly
from .serializers import EventListSerializer
from .models import Event

class EventViewSet(ModelViewSet):
    queryset = Event.objects.all()
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]
    authentication_classes = []
    serializer_class = EventListSerializer