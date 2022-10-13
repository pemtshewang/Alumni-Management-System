from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import AlumniListViewSet,SearchAlumniView,AlumniRegisterView

router = DefaultRouter()
router.register(r"all-members",AlumniListViewSet,basename="all-members")

urlpatterns = [
    path('',SearchAlumniView.as_view(),name="search-alumni"),
    path('register/',AlumniRegisterView.as_view(),name="register-alumni"),
]

urlpatterns += router.urls
