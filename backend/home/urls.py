# from django.urls import include, path
# from rest_framework import routers
# from home import views

# router = routers.DefaultRouter()
# # router.register(r'users', views.UserViewSet)
# # router.register(r'groups', views.GroupViewSet)
# router.register(r'api/AdminSignUp', views.AdminSignUpGroupViewSet)

# # Wire up our API using automatic URL routing.
# # Additionally, we include login URLs for the browsable API.

from django.urls import include, path
# from rest_framework import routers
from . import views


urlpatterns = [
    path('', views.home, name="Home"),
]