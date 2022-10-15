from ast import Mod
from dataclasses import field
from rest_framework.serializers import ModelSerializer
from .models import Event,Notification

class EventListSerializer(ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"
    
class NotificationListSerializer(ModelSerializer):
    class Meta:
        model = Notification
        fields = "__all__"
