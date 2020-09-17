from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import  static

app_name = 'porto'

urlpatterns = [
    path('', views.index, name='portfolio'),
    path('web_design', views.design_web, name='web_design'),
    path('graphic_design', views.graphic_design, name='graphic_design'),
    path('Content_production', views.Content_production, name='Content_production'),
    path('about_us', views.about_us, name='about_us'),
    path('work_samples_CMT', views.Work_samples_CMT, name='WS_CMT'),
    path('work_samples_GDF', views.Work_samples_GDF, name='WS_GDF'),
    path('work_samples_WDT', views.Work_samples_WDT, name='WS_WDT'),
    path('WDT_Detail', views.detail_WDT, name='WS_WDT_detail'),
    path('GDF_Detail', views.detail_GDF, name='WS_GDF_detail'),
    path('CMT_Detail', views.detail_CMT, name='WS_CMT_detail'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

