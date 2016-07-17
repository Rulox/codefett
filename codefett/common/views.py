from __future__ import unicode_literals

import json
from django.middleware.csrf import get_token
from django.http import HttpResponse
from django.views.generic import TemplateView
from users.models import CFUser


class HomeView(TemplateView):
    """
    Basic Home view. All the app logic is going to be in the frontend so
    this is the only django template we are going to render.
    """
    template_name = 'common/home.html'


def get_shared_data(request, **kwargs):
    """
    Return an object with all the required shared data for the FE to work properly.
    This view will be called every time a user refreshes the webpage. (IE when the user
    logs in, out, etc.

    :param request:
    :param kwargs:
    :return: dict
    """
    if request.user.is_authenticated():
        user = {
            'full_name': request.user.get_full_name(),
            'short_name': request.user.get_short_name(),
            'avatar': request.user.get_avatar_url()
        }
    else:
        user = False

    shared_data = {
        'user': user,
        'meta': {},
        'crsftoken': get_token(request)
    }

    return HttpResponse(json.dumps(shared_data), 'application/json')
