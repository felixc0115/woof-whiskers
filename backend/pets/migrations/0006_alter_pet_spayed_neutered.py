# Generated by Django 4.2.5 on 2023-10-02 02:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0005_pet_contact_pet_gender_pet_primary_breed_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pet',
            name='spayed_neutered',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]
