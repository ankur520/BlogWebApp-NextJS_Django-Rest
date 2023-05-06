from django.db import models


# Create your models here.
class AddBlog(models.Model):
    heading = models.CharField(max_length=500)
    slug = models.CharField(max_length=500)
    tags = models.CharField(max_length=500)
    category = models.CharField(max_length=500)
    file = models.CharField(max_length=500, null=True)
    views = models.IntegerField(default=0, null=True)
    likes = models.IntegerField(default=0, null=True)
    article = models.TextField()
    createdby = models.CharField(max_length=500)
    date = models.DateTimeField()

