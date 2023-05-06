from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import AdminSignUp  , BlogCategory


class AdminSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = AdminSignUp
        fields = ['url', 'id', 'name', 'email', 'password']



class BlogCategoryUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogCategory
        fields = ['url', 'id', 'name', 'email', 'password']