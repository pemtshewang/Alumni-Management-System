# Generated by Django 4.1 on 2022-10-14 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("alumni", "0016_alter_alumni_company_alter_alumni_job_profile_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="alumni",
            name="profile_image",
            field=models.ImageField(
                default="users/default.png", max_length=500, upload_to="users/"
            ),
        ),
    ]
