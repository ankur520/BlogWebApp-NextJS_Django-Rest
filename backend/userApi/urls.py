from django.urls import include, path
# from rest_framework import routers
from . import views



urlpatterns = [
 
    path("", views.home, name="Home"),
    path("userSignup", views.userSignupview, name="userSignupview"),
    path("userLogin", views.userLoginview, name="userLoginview"),
    path("createAuthor", views.createAuthor, name="createAuthor"),
    path("getAuthor/<str:pk>/", views.getAuthor, name="getAuthor"),




    path("demo", views.demo, name="demo"),

]