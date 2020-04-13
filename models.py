from django.db import models

# Create your models here.

class Gender(models.Model):
    select = models.CharField(max_length=50)
    def __str__(self):
        return self.select

class Information(models.Model):
    first_name = models.CharField(max_length=100)
    last_ame = models.CharField(max_length=200)
    email = models.CharField(max_length=11)
    plan = models.CharField(max_length=100)
    area = models.ForeignKey(Gender,on_delete = models.CASCADE)
