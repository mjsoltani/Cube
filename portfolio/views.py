from django.shortcuts import render
from django.core.mail import send_mail
from .models import Work_WDT
from .models import Work_CMT
from .models import Work_GDF


def index(request):
    return render(request, 'portfolio/index.html')


def design_web(request):
    return render(request, 'web_design/index.html')


def about_us(request):
    if request.method == 'POST':
        user_name = request.POST['first-name']
        email_name = request.POST['email']
        user_phone = request.POST['tell']
        message = request.POST['description']

        send_mail(user_name,
                  message,
                  email_name,
                  ['m.jsoltani2001@gmail.com'])
        return render(request, 'About Us/index.html', {'user_name': user_name, 'email_name': email_name,
                                                       'user_phone': user_phone, 'message': message})
    else:
        return render(request, 'About Us/index.html', {})


def form(request):
    return render(request, 'form/index.html')


def graphic_design(requests):
    return render(requests, 'graphic_design/index.html')


def Content_production(requests):
    return render(requests, 'Content_production/index.html')


def Work_samples_CMT(requests):
    return render(requests, 'Work_samples/C_M_T/index.html', )


def detail_CMT(requests, ):
    return render(requests, 'Work_samples/moreCMT/index.html')


def Work_samples_GDF(requests):
    return render(requests, 'Work_samples/G_D_F/index.html')


def detail_GDF(requests):
    return render(requests, 'cube/templates/Work_samples/moreGDF/index.html')


def Work_samples_WDT(requests):
    return render(requests, 'Work_samples/W_D_T/index.html')


def detail_WDT(requests):
    return render(requests, 'Work_samples/moreWDT/index.html')


def error_404_handler(requests, exception):
    return render(requests, '404/index.html')
