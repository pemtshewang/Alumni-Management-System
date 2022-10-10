from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import AlumniListViewSet

router = DefaultRouter()
router.register(r"all-members",AlumniListViewSet,basename="all-members")

urlpatterns = [
]

urlpatterns += router.urls
