# Generated by Django 4.0.4 on 2022-06-12 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userApi', '0004_usersignup_isauthor_usersignup_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='usersignup',
            name='isAuthor',
            field=models.BooleanField(default=False),
        ),
    ]
