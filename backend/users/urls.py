from rest_framework.routers import DefaultRouter
from .views import UserViewSet

router = DefaultRouter()
router.register(r'all-users',UserViewSet,basename="list-members")

urlpatterns = [
]
urlpatterns += router.urls
