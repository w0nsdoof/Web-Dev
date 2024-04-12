import json
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.request import Request
from rest_framework.response import Response

from api.models import Company
from api.serializers import CompanySerializer

class CompanyDetailAPIView(APIView):
    def get_object(self,pk=None):
        try:
            company = Company.objects.get(id=pk)
            return company
        except Company.DoesNotExist as e:
            return Response({"error":str(e)})
    
    def get(self, request, pk=None):
        company = self.get_object(pk)

        serializer = CompanySerializer(company)
        return Response(serializer.data)

    def put(self, request, pk=None):
        company = self.get_object(pk)

        serializer = CompanySerializer(
            instance=company,
            data=request.data
        )
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk=None):
        company = self.get_object(pk)

        company.delete()
        return Response({"deleted": True})