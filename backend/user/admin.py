from django.contrib import admin
from django.contrib.auth.models import Group
from .models import Account
from django.core.exceptions import ValidationError
from django.contrib.auth.admin import UserAdmin

# class AccountAdmin(UserAdmin):
#     model = Account
#     list_display = ('email', 'name', 'surname', 'username', 'is_active')
#     list_filter = ('email','is_staff', 'is_active')
#     fieldset = (
#         (None, {'fields': ('email', 'password')}),
#         ('About', {'fields': ('name', 'surname')}),
#         ('Permissions', {'fields': ('is_staff', 'is_superuser')}),
#     )
#     add_fieldsets = (
#         (None, {
#             'class': ('wide',),
#             'fields': ('email', 'name', 'surname', 'username', 'password1', 'is_staff', 'is_superuser', 'is_active'),
#         }),
#     )
#     search_fields = ('email',)
#     ordering = ('email',)

admin.site.register(Account)
admin.site.unregister(Group)