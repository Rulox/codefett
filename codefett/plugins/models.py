from __future__ import unicode_literals
import pkgutil
from django.db import models


PLUGINS_PATH = 'plugins/lib'


modules = pkgutil.iter_modules(path=[PLUGINS_PATH])
methods = []
for loader, mod_name, is_pkg in modules:
    methods.append(str(mod_name))

METHOD_CHOICES = [(name, name) for name in methods]


class Plugin(models.Model):
    #language
    description = models.TextField(blank=True, null=True)
    path = models.CharField(unique=True, choices=METHOD_CHOICES, max_length=255)

    @property
    def get_path(self):
        return PLUGINS_PATH + '/' + self.path

    @property
    def name(self):
        return self.path

    def __str__(self):
        return '{} in ({})'.format(self.name, self.get_path)
