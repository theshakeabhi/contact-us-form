from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpRequest
from django.http import JsonResponse
from .forms import ContactForm
from . import forms
from .models import ContactUs
# Create your views here.

def index(request):

    form = forms.ContactForm()
    return render(request, 'contactus/index.html',  {'form': form})

def show(request):
    contactus = ContactUs.objects.all
    return render(request, 'contactus/show.html', {'contactus': contactus})

def save(request):
    

    if request.method == "POST":
        details = ContactForm(request.POST)
        if details.is_valid():
            name= request.POST.get('name')
            email=request.POST.get('email')
            phoneno=request.POST.get('phoneno')
            description=request.POST.get('description')

            
            
            ContactUs.objects.create(
                name = name,
                email= email,
                phoneno = phoneno,
                description = description
            )

            return HttpResponse("data submitted successfully")

        else:
            return render(request, "contactus/index.html", {'form':details})
    
    form = forms.ContactForm()
    return render(request, 'contactus/index.html',  {'form': form})
