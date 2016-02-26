from django.views.generic import TemplateView

# Create your views here.


class HomeView(TemplateView):
    template_name = 'common/home.html'


class LoginView(TemplateView):
    template_name = 'common/login.html'
