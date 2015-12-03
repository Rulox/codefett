from django.test import TestCase
from django.contrib.auth.models import User
from .models import CFUser


class CFUserTest(TestCase):
    def setUp(self):
        dj_user = User.objects.create_user('john@codefett.com', password='foo', email='john@codefett.com')
        CFUser.objects.create(user=dj_user, full_name='John Doe')

    def TestUnicode(self):
        john = CFUser.objects.get(user__email='john@codefett.com')

        self.assertTrue('John (john@codefett.com)', john.__unicode__())
