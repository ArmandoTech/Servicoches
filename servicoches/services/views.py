from django.shortcuts import render
from django.core.mail import send_mail
from django.utils.html import escape

def index(request):
    return render(request, 'index.html', {})

def contact(request):
    if request.method=="POST":
        message_name=request.POST['name']
        message_cellphone=request.POST['cellphone']
        message_content=request.POST['message']
        message_email=request.POST['email']
        
        final_message=f' MENSAJE: {escape(message_content)}, CELULAR: {escape(message_cellphone)}, CORREO: {escape(message_email)}'

        send_mail('NUEVO MENSAJE DE: ' + message_name,
        final_message,
        message_email,
        ['info.servicoches@gmail.com']
        )

        return render(request, 'contact.html', {'message_name': message_name})

    else:
        return render(request, 'contact.html', {})

def services(request):
    return render(request, 'services.html', {})
