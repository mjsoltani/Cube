from django.contrib import admin
from .models import Work_WDT
from .models import Work_GDF
from .models import Work_CMT

admin.site.register(Work_WDT)
admin.site.register(Work_CMT)
admin.site.register(Work_GDF)
