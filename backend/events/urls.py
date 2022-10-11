from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import EventViewSet,EventStatusFilter

router = DefaultRouter()
router.register(r'all-events',EventViewSet,basename="all-events")

urlpatterns = [
    path('past-events/',EventStatusFilter.as_view(),name="filter-events"),
]

urlpatterns += router.urls


