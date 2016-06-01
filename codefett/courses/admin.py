from django.contrib import admin
from .models import Course, Enrollment


class EnrollmentInline(admin.TabularInline):
    model = Enrollment
    extra = 1


class CourseAdmin(admin.ModelAdmin):
    model = Course
    inlines = [EnrollmentInline, ]


admin.site.register(Course, CourseAdmin)
