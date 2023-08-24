from django.urls import path
from . import views
urlpatterns = [
    path('post/<int:itemid>', views.PostUserCart,name='post'),
    path('get',views.getCart,name='get')  
]