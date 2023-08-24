from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from django.core.serializers import serialize
import json
from .models import Menu
# Create your views here.

def CreateMenu(req):
    if req.method=="POST":
        body=json.loads(req.body)
        image=body.get('image')
        name=body.get('name')
        description=body.get('description')
        price=body.get('price')
        available=body.get('available')
        menu=Menu.objects.create(image=image,name=name,description=description,price=price,available=available)
        return JsonResponse({"msg":"Dish Created Succesfully"})
    else:
        return JsonResponse({"msg":"Error"})
    
def GetMenu(req):
    allMenus=Menu.objects.all()
    menu=serialize('json',allMenus)
    return JsonResponse({"data":menu})

def UpdateMenu(request, itemid):
    print(type(itemid))
    if request.method == "PATCH":
        menu = Menu.objects.get(id=itemid)
        menu.available = "yes"
        menu.save()
    else:
        return JsonResponse({"msg":"eror"})
    return JsonResponse({"msg":"Update"})

def Delete(request, itemid):
    if request.method == "DELETE":
        menu = Menu.objects.get(id=itemid)
        menu.delete()
    else:
        return JsonResponse({"msg":"eror"})
    return JsonResponse({"msg":"Deleted Successfully"})


