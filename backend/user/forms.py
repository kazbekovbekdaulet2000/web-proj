from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import Account

class AccountCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = Account
        fields = ('email', 'name', 'surname', 'username')

class AccountChangeForm(UserChangeForm):
    class Meta(UserCreationForm):
        model = Account
        fields = ('email', 'name', 'surname', 'username')