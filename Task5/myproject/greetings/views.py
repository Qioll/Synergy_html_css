from django.shortcuts import render, redirect
from .forms import UserForm
from .models import User

def greet_user(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            user = form.save()
            return render(request, 'greetings/greet.html', {'name': user.name})
    else:
        form = UserForm()
    return render(request, 'greetings/index.html', {'form': form})
