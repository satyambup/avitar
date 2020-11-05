from django.shortcuts import render,HttpResponse
# Create your views here.


def home(request):
    return render(request, 'home.html')


def about_us(request):
    return render(request, 'about_us.html')


def contact_us(request):
    return render(request, 'contact_us.html')


def gallery(request):
    return render(request, 'gallery.html')


def gallery_group(request):
    return render(request, 'gallery_group.html')


def test(request):
    return render(request, 'test.html')

