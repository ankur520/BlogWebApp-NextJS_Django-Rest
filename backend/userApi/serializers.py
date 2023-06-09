from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import UserSignUp  


class UserSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSignUp
        fields = "__all__"