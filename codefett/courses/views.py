from django.views.generic import DetailView
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Course


class CourseDetail(LoginRequiredMixin, DetailView):
    model = Course
