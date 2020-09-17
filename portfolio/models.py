from django.db import models


class Work_WDT(models.Model):
    title = models.CharField(max_length=30, verbose_name='اسم')
    slug = models.SlugField(max_length=50, null=True)
    subtitle = models.CharField(max_length=100, verbose_name='زیر عنوان، توضیح کوتاه')
    description = models.TextField(null=True)
    picture = models.ImageField(upload_to='pictures/%Y/%m/%d', null=True)

    def __str__(self):
        return self.title


class Work_GDF(models.Model):
    title = models.CharField(max_length=30, verbose_name='اسم')
    subtitle = models.CharField(max_length=100, verbose_name='زیر عنوان، توضیح کوتاه')
    description = models.TextField(null=True)


class Work_CMT(models.Model):
    title = models.CharField(max_length=30, verbose_name='اسم')
    subtitle = models.CharField(max_length=100, verbose_name='زیر عنوان، توضیح کوتاه')
    description = models.TextField(null=True)
    picture = models.ImageField(upload_to='pictures/%Y/%m/%d',
                                null=True)
