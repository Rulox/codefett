from django.utils.translation import ugettext as _
from django.db import models
from tagging.fields import TagField
from tagging.registry import register
from users.models import CFUser
from plugins.models import Plugin

STUDENTS_LIMIT_DEFAULT = 16
PLUGIN_CHOICES = (
    ('none', 'none'),
)
PRIVACY_CHOICES = (
    (0, 'Public'),
)

COURSE_STATUS = (
    (0, 'Preparation'),
    (1, 'Open'),
    (2, 'Finished'),
)

EXAMPLE_PROJECT = 'example'


class Course(models.Model):
    """
    Course model. It contains the basic information of a course, such as
    the name, description, which plugin is using, etc. It also contains information
    about the teacher and students related to this Course.
    """
    title = models.CharField(max_length=100)
    description = models.TextField(verbose_name=_('Course full description'))
    image = models.ImageField(upload_to='course_images', blank=True, null=True)
    status = models.IntegerField(default=0, choices=COURSE_STATUS)
    plugin = models.ForeignKey(Plugin)
    owner = models.ForeignKey(CFUser, related_name='own_course')
    created_at = models.DateField(auto_now_add=True)
    start_date = models.DateField(verbose_name=_('Course start date'))
    end_date = models.DateField(verbose_name=_('Course end date'))
    privacy = models.IntegerField(verbose_name=_('Course privacy mode'), default=0, choices=PRIVACY_CHOICES)
    limit = models.IntegerField(verbose_name=_('Max number of students'), default=STUDENTS_LIMIT_DEFAULT)
    students = models.ManyToManyField(CFUser, through='Enrollment')
    example_project = models.FileField(upload_to='projects', blank=True, null=True)
    tags = TagField()

    @property
    def tags_as_list(self):
        return self.tags.split(',')

    def __str__(self):
        return '{} ({} students)'.format(self.title, self.students.count())



class Enrollment(models.Model):
    """
    Class to track which users are enrolled in which courses. ManyToMany relationship
    help model.
    """
    course = models.ForeignKey(Course)
    student = models.ForeignKey(CFUser)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '{} enrolled in ({})'.format(self.student, self.course.title)


def set_example_project(sender, instance, created, **kwargs):
    """
    Right after the Course is created, this method will get the example project
    from the selected plugin, zip it and associate it with the course. Then, the
    teacher will be able to change it before the course starts. Also, students
    will be able to download the zip file with the project.
    """
    plugin_path = instance.plugin.get_path()


#post_save.connect(set_example_project, sender=Course)
