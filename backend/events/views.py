from datetime import datetime
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly
from .serializers import EventListSerializer
from .models import Event
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .serializers import EventListSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
from rest_framework.response import Response
from rest_framework.generics import ListAPIView
from rest_framework_simplejwt.authentication import JWTTokenUserAuthentication
from .models import Notification,Alumni
from .serializers import NotificationListSerializer


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


class EventCreateView(APIView):
    authentication_classes = [JWTTokenUserAuthentication]
    permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def post(self, request, format=None):
        print(request.data)
        serializer = EventListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # push the data in notification table
            # get all the alumni and push the data in notification table
            alumni = Alumni.objects.all()
            for al in alumni:
                if al != "admin":
                    Notification.objects.create(
                        author = Alumni.objects.get(pk=request.user.id),
                        created_at=datetime.now(),
                        title=request.data['title'], 
                        description=request.data['description'], 
                        image=request.data['image'], 
                        is_read=False,
                        receiver=Alumni.objects.get(pk=al.id))
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TotalEventHosterView(APIView):
    def get(self, request, format=None):
        total_event_hosters = Event.objects.values('author').distinct().count()
        return Response({"total_event_hosters": total_event_hosters}, status=status.HTTP_200_OK)

class NotificationView(APIView):
    authentication_classes = [JWTTokenUserAuthentication]
    permission_classes = [IsAuthenticated]

    # Get all the notifications
    def get(self, request, format=None):
        notifications = Notification.objects.filter(receiver=request.user.id)
        serializer = NotificationListSerializer(notifications, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # Update the notification status
    def put(self, request, format=None):
        notification = Notification.objects.get(pk=request.data['id'])
        notification.is_read = True
        notification.save()
        return Response(status=status.HTTP_200_OK)

class NotificationReadUpdateView(APIView):
    # Update the notification status
    def put(self, request, format=None, pk=None):
        notification = Notification.objects.get(pk=pk)
        notification.is_read = True
        notification.save()
        return Response(status=status.HTTP_200_OK)