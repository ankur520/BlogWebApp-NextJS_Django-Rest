from django.urls import include, path
# from rest_framework import routers
from . import views



urlpatterns = [
 
    path("", views.home, name="Home"),
    path("adminSignup", views.AdminSignview, name="AdminSignview"),
    path("adminLogin", views.adminLoginview, name="adminLoginview"),
    path("blogCategory", views.blogCategoryview, name="blogCategoryview"),




    path("demo", views.demo, name="demo"),

]