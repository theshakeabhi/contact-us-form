# Generated by Django 3.1.3 on 2020-11-04 18:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contactus', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contactus',
            name='phoneno',
            field=models.CharField(blank=True, max_length=11, null=True),
        ),
    ]
