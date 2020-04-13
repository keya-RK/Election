from django.shortcuts import render,redirect
from .forms import info_form
from .models import Information



#Main Form..
def portfolio_form(request,id=0):
    if request.method == 'GET':
        if id == 0:
            form = info_form()
        else:
            portfolio = Information.objects.get(pk=id)
            form = info_form(instance= portfolio)
        return render(request,"portfolio/portfolio.html",{'form':form})
    else:
        if id == 0:
            form = info_form(request.POST)
        else:
            portfolio = Information.objects.get(pk=id)
            form = info_form(request.POST,instance=portfolio)

        if form.is_valid:
            form.save()
            return redirect('/myfolio/show')

def show(request):
    context = {'portfolio_list': Information.objects.all()}
    return render(request,'show/show.html',context)

def portfolio_delete(request):
    return

def home(request):
    return render(request,'home/home.html')
