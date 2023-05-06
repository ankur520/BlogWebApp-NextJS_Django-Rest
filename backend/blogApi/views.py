from cmath import pi
from django.shortcuts import render
import json, array
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from datetime import datetime
from rest_framework import status
from django.utils.html import strip_tags
from .models import  *
from rest_framework.response import Response

# Create your views here.
def home(request):
    allURLS = {
         "/home" : 'http://localhost:8000/blogApi/',
        "/addBlog" : 'http://localhost:8000/blogApi/addBlog',
        "/getBlog" : 'http://localhost:8000/blogApi/getBlog',
        "/getBlogwith/slug" : 'http://localhost:8000/blogApi/getBlogwith/slug',
         "/getBlogwithcat/category" : 'http://localhost:8000/blogApi/getBlogwithcat/category',
        "/getBlogwithauthor/name" : 'http://localhost:8000/blogApi/getBlogwithauthor/name',
         
    }
    return JsonResponse(allURLS)



@api_view(['POST'])
def addBlogview(request):
    
    if request.method == 'POST':

        data = request.data
        message = {}

        postHeading = strip_tags(request.data['heading'])
        postSlug = strip_tags(request.data['slug'])
        postTags = strip_tags(request.data['tags'])
        postCategory = strip_tags(request.data['category'])
        postFile = strip_tags(request.data['file'])
        postWriteblog = strip_tags(request.data['writeblog'])

        # print(postHeading, postSlug, postTags,postCategory, postFile , postWriteblog)

        checkSlugExist = AddBlog.objects.filter(slug = postSlug).exists()

        if not checkSlugExist:
            query = AddBlog(heading = postHeading, slug = postSlug, tags = postTags, category = postCategory, views = "0", likes = "0",  article = postWriteblog, createdby="Admin", date = datetime.today()    )
            query.save()
            
            message = {
                'status': 'Blog Added Successfull'
                }

            return JsonResponse(message)

        else:
            message = {
                'status': 'Blog Already Exists with this Slug'
                }


        print(postHeading, postSlug, postTags,postCategory, postFile , postWriteblog)
        print("blogApi  views .py ----------------------")
        print("message " , message)

   
    return JsonResponse(message)




@api_view(["GET"])
def getBlogview(request):

    
    if request.method == "GET":
        
        blog = AddBlog.objects.values()
        
        message = {
        'status': 'AddBlog GET request Working',
        'blogs': blog,

        }

        return Response(message)




@api_view(["GET"])
def getBlogwithSlugview(request, pk):

    print("fasdfasfasdfsadfas")

    if request.method == "GET":
        print(" slug =>>>>> " , pk)
        
        blogWithSlug = AddBlog.objects.filter(slug=pk).values()
        print(blogWithSlug)
    
        
        message = {
            'status': 'blogWithSlug GET request Working',
            'blogswithslug': blogWithSlug,
            
        }

    
        # print(message)
    
    return Response(message)



@api_view(["GET"])
def getBlogwithCatview(request, pk):

    print("fasdfasfasdfsadfas")

    if request.method == "GET":
        print(" slug =>>>>> " , pk)
        
        blogWithcategory = AddBlog.objects.filter(category=pk).values()
        print(blogWithcategory)
    
        
        message = {
            'status': 'blogWithcategory GET request Working',
            'blogswithcat': blogWithcategory,
            
        }

    
        # print(message)
    
    return Response(message)




@api_view(["GET"])
def getBlogwithAuthorview(request, pk):

    # print("fasdfasfasdfsadfas")

    if request.method == "GET":
        # print(" slug =>>>>> " , pk)
        
        blogWithauthor = AddBlog.objects.filter(createdby=pk).values()
        # print(blogWithauthor)
    

        message = {
            'status': 'blogswithauthor GET request Working\n',
            "fsad" : "\n",
            'blogswithauthor': blogWithauthor,
            
        }

    
        print(message)
    
    return Response(message)

