# Generated by Django 4.1 on 2022-10-10 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("events", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="event",
            name="location",
            field=models.CharField(
                default="<django.db.models.fields.CharField>", max_length=100
            ),
        ),
    ]
