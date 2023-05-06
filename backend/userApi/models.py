from email.policy import default
from django.db import models

# Create your models here.

# Create your models here.
class UserSignUp(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=500)
    interestedtags = models.TextField(null= True)
    username = models.CharField(max_length=200, default="")
    isAuthor = models.BooleanField(default=False)



class authorDetail(models.Model):

    userid = models.ForeignKey(UserSignUp, on_delete=models.CASCADE )
    name = models.CharField(max_length=200)
    description = models.TextField()
    fb = models.URLField()
    twitter = models.URLField()
    date = models.DateTimeField()
    


    


    

