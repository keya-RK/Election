from django import forms
from .models import Information

class info_form(forms.ModelForm):
    class Meta:
        model = Information
        fields = ('fullname','address','phone','email','gender')
        widgets = {

            'first_name' : forms.TextInput(attrs={'class': 'form-control'}),
            'last_name' : forms.TextInput(attrs={'class' : 'form-control'}),
            'email'  : forms.TextInput(attrs={'class' : 'form-control'}),
            'area'  : forms.EmailInput(attrs={'class':'form-control'}),
            'plan' : forms.Select(attrs={'class' : 'form-control'}),

        }