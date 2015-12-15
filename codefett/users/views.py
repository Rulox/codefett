import json
from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.utils.translation import ugettext as _
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import CFUser
from .serializers import CFUserSerializer


# Create your views here.
class LoginView(APIView):
    """
    Basic Login View via Ajax.
    """

    def post(self, request, format=None):
        data = json.loads(request.body)

        email = data.get('email', None)
        password = data.get('password', None)

        if not email and password:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        account = authenticate(email=email, password=password)

        if account is not None:
            login(request, account)

            serialized = CFUserSerializer(account)

            return Response(serialized.data)
        else:
            return Response(
                {'message': _('Username/password combination invalid.')},
                status=status.HTTP_401_UNAUTHORIZED
            )


class RegisterView(APIView):
    """
    Basic registration view, also via Ajax. We have an easy User model `CFUser`, so we don't need to
    ask for many information to the user.
    """
    pass
