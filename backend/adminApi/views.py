from array import array
from ast import Compare
import email
from http.client import HTTPResponse
from django.http import JsonResponse
from django.shortcuts import render
from django.utils.html import strip_tags

# Create your views here.
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import  AdminSignUpSerializer, BlogCategoryUpSerializer
from .models import AdminSignUp, BlogCategory
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime
import json, array

def home(request):
    allURLS = {
        "/adminSignUp" : 'http://localhost:8000/adminApi/adminSignup',
        "/demo" : 'http://localhost:8000/adminApi/demo',
        "/adminLogin" : 'http://localhost:8000/adminApi/adminLogin',
        "/blogCategory" : 'http://localhost:8000/adminApi/blogCategory',

    }
    return JsonResponse(allURLS)


    
@api_view(['POST', 'GET'])
def demo(request):
    print("demo page ")

    return JsonResponse({"name": "ajay"})




@api_view(['POST'])
def AdminSignview(request):

    if request.method == 'POST':

        data = request.data
        message = {}

        postName = strip_tags(request.data['name'])
        postEmail = strip_tags(request.data['email'])
        postPasss = strip_tags(request.data['password'])

        checkEmailExist = AdminSignUp.objects.filter(email = postEmail).exists()

        if not checkEmailExist:
            query = AdminSignUp(name = postName, email = postEmail, password = postPasss )
            query.save()
            
            message = {
                'status': 'Sign Up Successfull'
                }

            return JsonResponse(message)

        else:
            message = {
                'status': 'User Already Exists'
                }


        print(postName, postEmail, postPasss)
        print("Admin sign Up views .py ----------------------")
        print("message " , message)

   
    return JsonResponse(message)



@api_view(['POST'])
def adminLoginview(request):

    if request.method == 'POST':

        data = request.data
        message = {}

        postEmail = strip_tags(request.data['name'])
        postPasss = strip_tags(request.data['password'])

        checkEmailExist = AdminSignUp.objects.filter(email = postEmail)


        if checkEmailExist.exists():

            checkPassword =  AdminSignUp.objects.filter(email = postEmail, password = postPasss)[0].password
            fettchedName =  AdminSignUp.objects.filter(email = postEmail, password = postPasss)[0].name
            fettchedEmail =  AdminSignUp.objects.filter(email = postEmail, password = postPasss)[0].email

            
            print("checkPassword Password", checkPassword)
            print("Post Password", postPasss)

            if checkPassword == postPasss:
                print("Login verified ")
                
                message = {
                    'status': 'Welcome to Admin dashboard',
                    "name" : fettchedName,
                    "email" : fettchedEmail,
                    "password" : checkPassword ,
                }

            else :
                print("Login unverified ")
                message = {
                'status': 'Sorry Password Wrong '
                }

            return JsonResponse(message)

            print("sdfsadfasdfasfasfasfasdfasfdasfasfdasdfasfa")

            

        else:
            message = {
                'status': 'User Not Exist Please Sign Up'
                }


        print(postEmail, postPasss)
        print("---------  adminLoginview  -------------")
        print("message " , message)

   
    return JsonResponse(message)



@api_view(['POST', "GET"])
def blogCategoryview(request):

    if request.method == 'POST':

        data = request.data
        message = {}
    

        postCategory = strip_tags(request.data['category'])
        postCreatedby = request.data['createdby']
        # print("cat ->", postCategory)
        # print("cat created  ->", postCreatedby)
    
        checkBlogExist = BlogCategory.objects.filter(category = postCategory)


        if not checkBlogExist.exists():
            query = BlogCategory(category = postCategory, createdby = postCreatedby, date = datetime.today())
            query.save()
           
            message = {
                    'status': 'Category Added Successfully',
                }
            return JsonResponse(message)

        else :
            print("Category already exists ")
            message = {
            'status': 'Category Already Exist'
            }

            return JsonResponse(message)




    if request.method == 'GET':
        
        allcat = BlogCategory.objects.values()
        
        message = {
        'status': 'Category GET request Working',
        'cats': allcat,

        }


        # print(allcat)
        # print(message)


        return Response(message)


