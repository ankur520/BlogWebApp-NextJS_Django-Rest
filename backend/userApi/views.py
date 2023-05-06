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
from .serializers import  UserSignupSerializer
from .models import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from datetime import datetime


def home(request):
    allURLS = {
        "/userSignup" : 'http://localhost:8000/userApi/userSignup',
        "/demo" : 'http://localhost:8000/userApi/demo',
        "/userLogin" : 'http://localhost:8000/userApi/userLogin',
        "/createAuthor" : 'http://localhost:8000/userApi/createAuthor',
        "/getAuthor/ajay" : 'http://localhost:8000/userApi/getAuthor/',
    }
    return JsonResponse(allURLS)


    
@api_view(['POST', 'GET'])
def demo(request):
    print("demo page ")
    return JsonResponse({"name": "ajay", "api": "user api section "})



@api_view(['POST'])
def userSignupview(request):

    if request.method == 'POST':

        data = request.data
        message = {}

        postName = strip_tags(request.data['name'])
        postEmail = strip_tags(request.data['email'])
        postPasss = strip_tags(request.data['password'])

        checkEmailExist = UserSignUp.objects.filter(email = postEmail).exists()

        if not checkEmailExist:
            query = UserSignUp(name = postName, email = postEmail, password = postPasss )
            query.save()
            
            message = {
                'status': ' User Sign Up Successfull'
                }

            return JsonResponse(message)

        else:
            message = {
                'status': 'User Already Exists'
                }


        print(postName, postEmail, postPasss)
        print("user sign Up views .py ----------------------")
        print("message " , message)

   
    return JsonResponse(message)




@api_view(['POST'])
def userLoginview(request):

    if request.method == 'POST':

        data = request.data
        message = {}

        postEmail = strip_tags(request.data['name'])
        postPasss = strip_tags(request.data['password'])

        checkEmailExist = UserSignUp.objects.filter(email = postEmail)


        if checkEmailExist.exists():

            checkPassword =  UserSignUp.objects.filter(email = postEmail, password = postPasss)[0].password
            fettchedName =  UserSignUp.objects.filter(email = postEmail, password = postPasss)[0].name
            fettchedEmail =  UserSignUp.objects.filter(email = postEmail, password = postPasss)[0].email

            
            print("checkPassword Password", checkPassword)
            print("Post Password", postPasss)

            if checkPassword == postPasss:
                print("User Login verified ")
                
                message = {
                    'status': 'Welcome to User dashboard',
                    "name" : fettchedName,
                    "email" : fettchedEmail,
                    "password" : checkPassword ,
                }

            else :
                print("User Login unverified ")
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
def createAuthor(request):


    if request.method == 'POST':

        data = request.data
        print(data)
        message = {}

        postUserid = strip_tags(request.data['userid'])
        postName = strip_tags(request.data['name'])
        postDescription = strip_tags(request.data['description'])
        postFb = strip_tags(request.data['fb'])
        postTwitter = strip_tags(request.data['twitter'])
   
        query = authorDetail(userid_id = postUserid, name = postName, description = postDescription, fb = postFb,  twitter = postTwitter, date = datetime.today() )
        userquery = UserSignUp.objects.filter(id = postUserid).update(isAuthor = "True")
    
        query.save()

        message = {
            'status': 'Author Profile Added Successfully'
        }

        # print(message)

        return JsonResponse(message)




    if request.method == 'GET':
        
        getauthor = authorDetail.objects.values()

        message = {
            'status': 'Get All Author Details Successfully',
            'getauthordata': getauthor,
        }

    return Response(message)




@api_view(['GET'])
def getAuthor(request, pk):

    if request.method == 'GET':

        # print(pk , "working sdafasdfasfsadfafadsfdfs")

        getAuthorData = authorDetail.objects.filter(name = pk).values()

        message = {
            'status': 'Get All Author Details Successfully',
            'authordata': getAuthorData,
        }

        print(message)

    return Response(message)

