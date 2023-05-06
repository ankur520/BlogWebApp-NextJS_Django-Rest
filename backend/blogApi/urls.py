from django.urls import include, path
# from rest_framework import routers
from . import views



urlpatterns = [
 
    path("", views.home, name="Home"),
    path("addBlog", views.addBlogview, name="addBlog"),
    path("getBlog", views.getBlogview, name="getBlog"),
    path("getBlogwith/<str:pk>/", views.getBlogwithSlugview, name="getBlogwithSlugview"),
    path("getBlogwithcat/<str:pk>/", views.getBlogwithCatview, name="getBlogwithCatview"),
    path("getBlogwithauthor/<str:pk>/", views.getBlogwithAuthorview, name="getBlogwithAuthorview"),
    



]