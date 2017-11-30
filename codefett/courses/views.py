from django.views.generic import DetailView, ListView
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Course
from django.http import HttpResponseForbidden
from django import forms


class PreparationForm(forms.Form):
    ExampleProject = forms.FileField(label='Example Project')


class CourseList(LoginRequiredMixin, ListView):
    model = Course


# FIXME change for normal view cos we need a form
class CourseDetail(LoginRequiredMixin, DetailView):
    model = Course

    def get_context_data(self, **kwargs):
        context = super(CourseDetail, self).get_context_data(**kwargs)
        context['form'] = PreparationForm
        context['example_url'] = ''
        return context

    def dispatch(self, request, *args, **kwargs):
        if request.user.course_set.filter(enrollment__course=self.get_object()).exists():
            #TODO Add if the user is owner
            return super(CourseDetail, self).dispatch(request, *args, **kwargs)
        else:
            return HttpResponseForbidden()
