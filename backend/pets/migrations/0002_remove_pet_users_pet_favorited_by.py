# Generated by Django 4.2.5 on 2023-09-28 21:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pet',
            name='users',
        ),
        migrations.AddField(
            model_name='pet',
            name='favorited_by',
            field=models.CharField(null=True),
        ),
    ]
