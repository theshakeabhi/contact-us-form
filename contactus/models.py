from django.db import models

# Create your models here.

class ContactUs(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    phoneno=models.IntegerField(blank=True, null=True)
    description=models.TextField(max_length=200)

    def __str__(self):
        return self.name