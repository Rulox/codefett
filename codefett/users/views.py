from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.utils.translation import ugettext as _
from django.views.generic import View
from braces.views import AjaxResponseMixin, JsonRequestResponseMixin
from braces.views import CsrfExemptMixin  # FIXME: Delete this import, it wont be used anymore
from .models import CFUser


class RegisterView(CsrfExemptMixin, JsonRequestResponseMixin, AjaxResponseMixin, View):
    """
    Basic registration view.
    """
    require_json = True

    def post_ajax(self, request, *args, **kwargs):
        full_name = self.request_json.get('full_name')
        email = self.request_json.get('email')
        pass1 = self.request_json.get('password1')
        pass2 = self.request_json.get('password2')

        if not full_name or not email or not pass1 or not pass2:
            return self.render_bad_request_response(
                {u'message': _(u'Please complete fields marked with *.')}
            )

        if pass1 != pass2:
            return self.render_bad_request_response(
                {u'message': _(u'Your passwords does not match.')}
            )

        # Create the user with our custom Manager
        CFUser.objects.create_user(email, pass1)

        return self.render_json_response(
            {u'message': _(u'Your account has been created.')}
        )


class LoginView(CsrfExemptMixin, JsonRequestResponseMixin, AjaxResponseMixin, View):
    """
    Basic Login View. We will only implement the post_ajax method from
    AjaxResponseMixin.
    """

    require_json = True

    def post_ajax(self, request, *args, **kwargs):

        email = self.request_json.get('email')
        password = self.request_json.get('password')

        if not email and password:
            return self.render_bad_request_response(
                {u'message': _(u'You must introduce your email and password.')}
            )

        account = authenticate(email=email, password=password)

        if account is not None:
            login(request, account)

            return self.render_json_response(
                {u'message': _(u'You have been logged in successfully.')}
            )
        else:
            return self.render_bad_request_response(
                {u'message': _(u'Invalid username/password, try again.')}
            )


class LogoutView(CsrfExemptMixin, AjaxResponseMixin, View):
    """
        Basic Logout View.
    """
    def get_ajax(self, request, *args, **kwargs):
        raise NotImplementedError
