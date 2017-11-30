from django.shortcuts import render


def home(request):
    """
    Basic Home view. All the app logic is going to be in the frontend so
    this is the only django template we are going to render.
    """
    if request.user.is_authenticated:
        context = {
            'courses': request.user.course_set.all()
        }
        return render(request, 'common/dashboard.html', context)
    else:
        return render(request, 'common/home.html')
