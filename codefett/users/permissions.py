from rest_framework import permissions


class IsAccountOwner(permissions.BasePermission):
    """
    Simple class to check if a request.user is an account owner
    """
    def has_object_permission(self, request, view, obj):
        """
        Overrided method. Check if the request.user has permissions over the obj
        :param request:
        :param view:
        :param obj:
        :return:
        """
        if request.user:
            return obj == request.user
        return False