from django.contrib import admin
from django.urls import path, include

# I chose to add v1 after my base api route as it is good practice to version your APIs
urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/", include("pets.urls")),
    path("api-auth/", include("rest_framework.urls")),
    path("api/v1/dj-rest-auth/", include("dj_rest_auth.urls")),
    path(
        "api/v1/dj-rest-auth/registration/", include("dj_rest_auth.registration.urls")
    ),
]
