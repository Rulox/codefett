from __future__ import unicode_literals
from django.contrib.auth.models import User
from django.db import models


class CFUser(models.Model):
    """
    Basic User model for Codefett. It has a OneToOne relationship with Django User in order to implement
    registration and login. We only want to ask for some basic details. Email must be unique so we can
    identify users.
    """
    user = models.OneToOneField(User)
    full_name = models.CharField(max_length=90)
    avatar = models.ImageField(blank=True, null=True)

    @property
    def name(self):
        return self.full_name.split(' ')[0]

    def __unicode__(self):
        return u'{} ({})'.format(self.name, self.user.email)
