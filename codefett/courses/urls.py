from django.conf.urls import url
from .views import CourseDetail, CourseList

urlpatterns = [
    url(r'^$', CourseList.as_view(), name='course_list'),
    url(r'^(?P<pk>\d+)$', CourseDetail.as_view(), name='course_detail'),
]