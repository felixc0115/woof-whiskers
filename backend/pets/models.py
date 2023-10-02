from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.


class Pet(models.Model):
    pet_id = models.IntegerField(primary_key=True)
    name = models.CharField(blank=False)
    gender = models.CharField(null=True, blank=True)
    primary_breed = models.CharField(null=True, blank=True)
    primary_color = models.CharField(null=True, blank=True)
    spayed_neutered = models.BooleanField(null=True, blank=True)
    contact = models.CharField(null=True, blank=True)
    description = models.CharField(null=True, blank=True)
    pet_more_info_url = models.CharField(blank=False)
    pet_picture_url = models.CharField(null=True, blank=True)
    city = models.CharField(null=True)
    state = models.CharField(null=True)
    favorited_by = models.CharField(blank=False, null=True)

    def __str__(self):
        return self.name
