from django.db import models

# Create your models here.
class Menu(models.Model):
    image=models.CharField()
    name=models.CharField()
    description=models.CharField()
    price=models.PositiveIntegerField()
    available=models.CharField()
