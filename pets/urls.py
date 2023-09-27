from django.urls import path
from .views import PetList, PetDetail

urlpatterns = [
    path("<int:pk>/", PetDetail.as_view(), name="pet_detail"),
    path("", PetList.as_view(), name="pet_list"),
]
