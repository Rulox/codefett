import json
from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.utils.translation import ugettext as _
from rest_framework import status, permissions, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import CFUser
from .serializers import CFUserSerializer
from .permissions import IsAccountOwner


class CFUserViewSet(viewsets.ModelViewSet):
    lookup_field = 'id'
    queryset = CFUser.objects.all()
    serializer_class = CFUserSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return permissions.AllowAny(),

        if self.request.method == 'POST':
            return permissions.AllowAny(),

        return permissions.IsAuthenticated(), IsAccountOwner()

    def create(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            CFUser.objects.create_user(**serializer.validated_data)

            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

        return Response({
            'status': 'Bad request',
            'message': 'Account could not be created with received data'
        }, status=status.HTTP_400_BAD_REQUEST)


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
