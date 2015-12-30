from django.conf.urls import url
from .views import LoginView, RegisterView


urlpatterns = [
    url(r'^register/$', RegisterView.as_view(), name='registration'),
    url(r'^login/$', LoginView.as_view(), name='login')
]