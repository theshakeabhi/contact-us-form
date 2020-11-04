from django.forms import ModelForm 
from django import forms 
from .models import ContactUs


# define the class of a form 
class ContactForm(ModelForm): 

    name = forms.CharField(label='Name:', required=True, min_length=3, max_length=100)
    email = forms.EmailField(label='Email:', required=True)
    phoneno = forms.CharField(label='Phone No:',required=False )
    description = forms.CharField(label='Description:',required=True, widget=forms.Textarea)

    class Meta: 
        # write the name of models for which the form is made 
        model = ContactUs	 

        # Custom fields 
        fields =['name', 'email', 'phoneno', 'description']