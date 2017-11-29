from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.utils.translation import ugettext as _


class CFUserManager(BaseUserManager):
    def create_user(self, email, password=None, **kwargs):
        if not email:
            raise ValueError(_('Users must have a valid email address.'))

        account = self.model(
            email=self.normalize_email(email)
        )

        account.set_password(password)
        account.save()

        return account

    def create_superuser(self, email, password, **kwargs):
        account = self.create_user(email, password, **kwargs)

        account.is_admin = True
        account.save()

        return account


class CFUser(AbstractBaseUser):
    """
    Basic User model for Codefett. We only want to ask for some basic details. Email must be unique so we can
    identify users.
    """
    email = models.EmailField(unique=True)
    full_name = models.CharField(max_length=90)
    avatar = models.ImageField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    is_admin = models.BooleanField(default=False)

    objects = CFUserManager()

    USERNAME_FIELD = 'email'

    @property
    def name(self):
        return self.full_name.split(' ')[0]

    @property
    def is_superuser(self):
        return self.is_admin

    @property
    def is_staff(self):
        return self.is_admin

    def __str__(self):
        return '{} ({})'.format(self.name, self.email)

    def get_full_name(self):
        return self.full_name

    def get_short_name(self):
        return self.name

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return self.is_admin

    def get_avatar_url(self):
        return self.avatar.url if self.avatar else ''
