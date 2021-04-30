from django.contrib import admin
from .models import *

admin.site.register(Movies)
admin.site.register(Actor)
admin.site.register(Director)
admin.site.register(Genres)
admin.site.register(Comment)
admin.site.register(Profile)