# Generated by Django 4.2.5 on 2023-10-01 11:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0004_alter_pet_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='pet',
            name='contact',
            field=models.CharField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='pet',
            name='gender',
            field=models.CharField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='pet',
            name='primary_breed',
            field=models.CharField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='pet',
            name='primary_color',
            field=models.CharField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='pet',
            name='spayed_neutered',
            field=models.CharField(blank=True, null=True),
        ),
    ]
