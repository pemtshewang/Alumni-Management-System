from django.shortcuts import render
from rest_framework import generics # for views
from blog.models import Post
from .serializers import PostSerializer

class PostList(generics.ListCreateAPIView):
    """This class are converted to API view in the browser
       This can be checked at the admin page at the available HTTP methods """
    """List and create item"""
    queryset = Post.postobjects.all()
    serializer_class = PostSerializer
    pass

class PostDetail(generics.RetrieveDestroyAPIView): 
    """Retrieve and delete the items"""
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    


