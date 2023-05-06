from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from django.http import JsonResponse
# from home.serializers import  AdminSignUpSerializer


def home(request):
    
    adminURLS = {
        "adminApi": "All Admin Section API Details",
        "/adminSignUp" : 'http://localhost:8000/adminApi/adminSignup',
        "/demo" : 'http://localhost:8000/adminApi/demo',
        "/adminLogin" : 'http://localhost:8000/adminApi/adminLogin',
        "/blogCategory" : 'http://localhost:8000/adminApi/blogCategory',
        "-": "--------------------------------------------------------------------- ",
        "blogApi": "All BLog Section API Details",
        "/home" : 'http://localhost:8000/blogApi/',
        "/addBlog" : 'http://localhost:8000/blogApi/addBlog',
        "/getBlog" : 'http://localhost:8000/blogApi/getBlog',
        "/getBlogwith/slug" : 'http://localhost:8000/blogApi/getBlogwith/slug',
         "/getBlogwithcat/category" : 'http://localhost:8000/blogApi/getBlogwithcat/category',
        " -": " ------------------------------------------------------------------------- ",
        "userApi": "All USer Section API Details",
        "/userSignup" : 'http://localhost:8000/userApi/userSignup',
        "/demo" : 'http://localhost:8000/userApi/demo',
        "/userLogin" : 'http://localhost:8000/userApi/userLogin',

    }

 


    return JsonResponse(adminURLS)


# class AdminSignUpGroupViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows groups to be viewed or edited.
#     """
#     queryset = AdminSignUp.objects.all()
#     serializer_class = AdminSignUpSerializer
#     permission_classes = [permissions.IsAuthenticated]