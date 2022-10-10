from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import EventViewSet

router = DefaultRouter()
router.register(r'all-events',EventViewSet,basename="all-events")

urlpatterns = [
]

urlpatterns += router.urls


