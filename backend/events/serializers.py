from ast import Mod
from dataclasses import field
from rest_framework.serializers import ModelSerializer
from .models import Event,Notification
from rest_framework import serializers


"""
Serializer is used to convert the data from the database to JSON format
It is also used to convert the frontend data format to the database format which is python dictionary type
After serializing the data, it is sent to the frontend

Below classes are used to serialize the data from the database to JSON format and vice versa
"""
class EventListSerializer(ModelSerializer):
    """This classes  serializes all the event data from the database and converts it to JSON format 
       and later sent to the frontend"""
    class Meta:
        model = Event
        fields = "__all__"
    
class NotificationListSerializer(ModelSerializer):
    """This classes  serializes all the notification data from the database and converts it to JSON format
       and later sent to the frontend"""
    class Meta:
        # name of the model that needs to be serialized
        model = Notification
        # The table fields are specified to be serialized
        fields = "__all__"

class NotificationUpdateSerializer(ModelSerializer):
    """This classes serves as serializer for updating the notification data in the database"""
    class Meta:
        model = Notification
        fields = "is_read"
