# Generated by Django 4.2.5 on 2023-09-29 22:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0002_remove_pet_users_pet_favorited_by'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pet',
            name='id',
        ),
        migrations.AlterField(
            model_name='pet',
            name='pet_id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
