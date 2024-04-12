from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    address = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
    def to_json(self):
        return {
            "id" : self.id,
            "name" : self.name,
            "description" : self.description,
            "city" : self.city,
            "address" : self.address
        }
    
    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"



class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
    def to_json(self):
        return {
            "id": self.id,
            "name" : self.name,
            "description" : self.description,
            "salary" : self.salary,
            "company" : self.company
        }
    
    class Meta:
        verbose_name = "Vacancy"
        verbose_name_plural = "Vacancies"