from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.shortcuts import redirect

import explainerAI
import translatorAI

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', lambda request: redirect('templates/home.html')),
    path('api/explain/', explainerAI.explain_code, name='explain_code'),
    path('api/translate/', translatorAI.translate_code, name='translate_code'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
