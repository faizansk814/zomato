from django.shortcuts import render
from django.http import JsonResponse
from menu.models import Menu
from .models import Cart
# Create your views here.

def PostUserCart(req,itemid):
    if req.user.is_authenticated:
        if req.method=="POST":
            curr_user=req.user
            product=Menu.objects.get(id=itemid)
            cart,created=Cart.objects.get_or_create(user=curr_user)
            cart.product.add(product)
            return JsonResponse({"msg":"Product added to cart"})
        else:
            return JsonResponse({"msg":"error"})
    else:
        return JsonResponse({"msg":"Login first"})
    
def getCart(request):
    user = request.user
    try:
        cart = Cart.objects.get(user=user)
        cart_data = {
            "user": user.username,
            "products": list(cart.product.values())
        }
        return JsonResponse(cart_data)
    except Cart.DoesNotExist:
        return JsonResponse({"message": "Cart not found"}, status=404)
    
