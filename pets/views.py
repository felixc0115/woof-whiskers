from rest_framework import generics
from .serializers import PetSerializer
from .models import Pet


# Create your views here.

# There is some duplicate code in here so I could look into ways to make it more DRY for example using viewsets which groups related view logic into one class.


class PetList(generics.ListCreateAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer


class PetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetSerializer
