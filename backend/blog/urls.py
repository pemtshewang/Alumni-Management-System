from django.urls import path
from django.views.generic import TemplateView

app_name = "blog"

urlpatterns = [
        # TemplateView need not be rendered
        path('',TemplateView.as_view(template_name="blog/index.html")),
        ]
