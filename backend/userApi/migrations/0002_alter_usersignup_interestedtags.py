# Generated by Django 4.0.3 on 2022-06-01 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userApi', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usersignup',
            name='interestedtags',
            field=models.TextField(null=True),
        ),
    ]
