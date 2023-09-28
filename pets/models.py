from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.


# I am intentionally not setting blank = True on the users CharField because if every user removes this specific pet from their favorites it will be blank.
class Pet(models.Model):
    pet_id = models.CharField(blank=False)
    name = models.CharField(blank=False)
    description = models.CharField(blank=False)
    pet_more_info_url = models.CharField(blank=False)
    pet_picture_url = models.CharField(null=True, blank=True)
    city = models.CharField(null=True)
    state = models.CharField(null=True)
    users = ArrayField(models.CharField())

    def __str__(self):
        return self.pet_id