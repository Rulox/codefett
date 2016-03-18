from django.conf.urls import url
from .views import LoginView, RegisterView, LogoutView


urlpatterns = [
    url(r'^register/$', RegisterView.as_view(), name='registration'),
    url(r'^login/$', LoginView.as_view(), name='login'),
    url(r'^logout/$', LoginView.as_view(), name='logout'),
]