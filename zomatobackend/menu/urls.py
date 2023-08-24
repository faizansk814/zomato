from django.urls import path
from . import views
urlpatterns = [
    path('create', views.CreateMenu,name='create'),
    path('get', views.GetMenu,name='get'),
    path('update', views.UpdateMenu,name='update'),
    path('delete', views.Delete,name='delete'),
]