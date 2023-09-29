from django.contrib.postgres.fields import ArrayField
from django.db import models

# Create your models here.


class Pet(models.Model):
    # need to add another property for primary key to send to the frontend so that it can make DELETE requests
    pet_id = models.IntegerField(primary_key=True)
    name = models.CharField(blank=False)
    description = models.CharField(blank=False)
    pet_more_info_url = models.CharField(blank=False)
    pet_picture_url = models.CharField(null=True, blank=True)
    city = models.CharField(null=True)
    state = models.CharField(null=True)
    favorited_by = models.CharField(blank=False, null=True)

    def __str__(self):
        return self.pet_id
