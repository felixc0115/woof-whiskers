from rest_framework import serializers

from .models import Pet


class PetSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            "pet_id",
            "name",
            "gender",
            "primary_breed",
            "primary_color",
            "spayed_neutered",
            "contact",
            "description",
            "pet_more_info_url",
            "pet_picture_url",
            "city",
            "state",
            "favorited_by",
        )
        model = Pet
