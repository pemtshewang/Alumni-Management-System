from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import EventViewSet,EventStatusFilter,EventCreateView,TotalEventHosterView,NotificationView,NotificationReadUpdateView,UserEventView

router = DefaultRouter()
router.register(r'all-events',EventViewSet,basename="all-events")

urlpatterns = [
    path('past-events/',EventStatusFilter.as_view(),name="filter-events"),
    path('create-event/',EventCreateView.as_view(),name="create-event"),
    path('delete-event/<int:pk>/', EventCreateView.as_view(), name="delete-event"),
    path('event-hosters/',TotalEventHosterView.as_view(),name="event-hosters"),
    path('notifications/',NotificationView.as_view(),name="notification"),
    path('notifications/<int:pk>/',NotificationReadUpdateView.as_view(),name="notification-update"),
    path('user-events/<int:pk>/',UserEventView.as_view(),name="user-events"),
]

urlpatterns += router.urls



