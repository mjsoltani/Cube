# Generated by Django 3.0 on 2020-09-09 10:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Work_CMT',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30, verbose_name='اسم')),
                ('subtitle', models.CharField(max_length=100, verbose_name='زیر عنوان، توضیح کوتاه')),
                ('description', models.TextField()),
                ('picture', models.ImageField(height_field='picture_height', null=True, upload_to='pictures/%Y/%m/%d', width_field='picture_width')),
            ],
        ),
        migrations.CreateModel(
            name='Work_GDF',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30, verbose_name='اسم')),
                ('subtitle', models.CharField(max_length=100, verbose_name='زیر عنوان، توضیح کوتاه')),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Work_WDT',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=30, verbose_name='اسم')),
                ('subtitle', models.CharField(max_length=100, verbose_name='زیر عنوان، توضیح کوتاه')),
            ],
        ),
    ]
