# Generated by Django 4.1 on 2022-10-11 08:21

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ("alumni", "0012_alumni_is_admin"),
    ]

    operations = [
        migrations.AddField(
            model_name="alumni",
            name="graduation_year",
            field=models.DateField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
