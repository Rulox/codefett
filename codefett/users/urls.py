from django.conf.urls import url
from .views import LoginView, RegisterView


urlpatterns = [
    url(r'^register/$', RegisterView.as_view(), name='registration'),
]