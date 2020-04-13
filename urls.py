from django.urls import path,include
from .import views

urlpatterns = [
 
 path('',views.portfolio_form,name='portfolio'),
 path('show/',views.show,name='show'),
 path('home/',views.home,name='home'),
 path('<int:id>/',views.portfolio_form,name='portfolio_update'),

]