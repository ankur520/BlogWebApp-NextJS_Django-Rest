from django.db import models

# Create your models here.

# Create your models here.
class AdminSignUp(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=200)
    password = models.CharField(max_length=500)



# Create your models here.
class BlogCategory(models.Model):
    category = models.CharField(max_length=200)
    createdby = models.CharField(max_length=200)
    date = models.DateTimeField(null=True)