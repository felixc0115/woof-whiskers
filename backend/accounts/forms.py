from django.contrib.auth.forms import UserCreationForm, UserChangeForm

# instead of importing CustomUser from .models, I used the get_user_model function which will reference the AUTH_USER_MODEL in the settings.py file which is what we use to set the user
from django.contrib.auth import get_user_model


# although excluding class Meta would work, including it has more benefits to isolate the metadata of the class also to prevent name clashing.
class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = get_user_model()
        fields = UserCreationForm.Meta.fields + ("name",)


class CustomUserChangeForm(UserChangeForm):
    class Meta:
        model = get_user_model()
        fields = UserChangeForm.Meta.fields
