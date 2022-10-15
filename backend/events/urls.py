from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import EventViewSet,EventStatusFilter,EventCreateView,TotalEventHosterView,NotificationView

router = DefaultRouter()
router.register(r'all-events',EventViewSet,basename="all-events")

urlpatterns = [
    path('past-events/',EventStatusFilter.as_view(),name="filter-events"),
    path('create-event/',EventCreateView.as_view(),name="create-event"),
    path('event-hosters/',TotalEventHosterView.as_view(),name="event-hosters"),
    path('notifications/',NotificationView.as_view(),name="notification"),
]

urlpatterns += router.urls



