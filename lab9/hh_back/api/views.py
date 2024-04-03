from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Company,Vacancy

def company_list(request):
    companies = Company.objects.all()
    data = {'companies': list(companies.values())}
    return JsonResponse(data)

def company_detail(request,company_id):
    company = get_object_or_404(Company,id=company_id)
    data = {'Company': {
        'name' : company.name,
        'description' : company.description,
        'city' : company.city,
        'address' : company.address
    }}
    return JsonResponse(data)

def company_vacancies(request,company_id):
    company = get_object_or_404(Company,id=company_id)
    vacancies = company.vacancy_set.all()
    data = {'vacancies': list(vacancies.values())}
    return JsonResponse(data)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    data = {'vacancies': list(vacancies.values())}
    return JsonResponse(data)

def vacancy_detail(request,vacancy_id):
    vacancy = get_object_or_404(Vacancy,id=vacancy_id)
    data = {'Vacancy': {
        'name' : vacancy.name,
        'description' : vacancy.description,
        'salary' : vacancy.salary,
        'company' : vacancy.company.name
    }}
    return JsonResponse(data)

def vacancy_top10(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = {'vacancies': list(vacancies.values())}
    return JsonResponse(data)