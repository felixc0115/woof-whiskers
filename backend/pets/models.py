from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.


class Pet(models.Model):
    pet_id = models.CharField(blank=False)
    name = models.CharField(blank=False)
    description = models.CharField(blank=False)
    pet_more_info_url = models.CharField(blank=False)
    pet_picture_url = models.CharField(null=True, blank=True)
    city = models.CharField(null=True)
    state = models.CharField(null=True)
    favorited_by = models.CharField(blank=False, null=True)

    def __str__(self):
        return self.pet_id
