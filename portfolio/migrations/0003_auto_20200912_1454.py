# Generated by Django 3.0 on 2020-09-12 10:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_auto_20200909_1629'),
    ]

    operations = [
        migrations.AddField(
            model_name='work_wdt',
            name='slug',
            field=models.SlugField(null=True),
        ),
        migrations.AlterField(
            model_name='work_cmt',
            name='picture',
            field=models.ImageField(null=True, upload_to='pictures/%Y/%m/%d'),
        ),
        migrations.AlterField(
            model_name='work_wdt',
            name='picture',
            field=models.ImageField(null=True, upload_to='pictures/%Y/%m/%d'),
        ),
    ]
