from django.conf.urls import url
from .views import CourseDetail

urlpatterns = [
    url(r'^(?P<pk>\d+)$', CourseDetail.as_view(), name='course_detail'),
]