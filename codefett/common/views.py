from django.views.generic import TemplateView


class HomeView(TemplateView):
    """
    Basic Home view. All the app logic is going to be in the frontend so
    this is the only django template we are going to render.
    """
    template_name = 'common/home.html'
