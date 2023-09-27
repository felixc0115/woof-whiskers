from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.


# I chose to create a CustomUser model that is a subclass of AbstractUser because it allows for easier customization than using the built-in User model
class CustomUser(AbstractUser):
    name = models.CharField(null=True, blank=True, max_length=100)
