import { Component } from '@angular/core';
import { CompanyService } from './service/company.service';
import { Company } from './interfaces/company';
import { Vacancy } from './interfaces/vacancy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CompanyService]
})
export class AppComponent {
  title = 'HeadHunter';

  companies: Company[] = [];
  vacancies: Vacancy[] = [];
  selectedCompany: Company | null = null;

  constructor(private companyService:CompanyService){
    this.getCompanies();
  }

  getCompanies = () => {
    this.companyService.getCompanies().subscribe(
      data => {
        this.companies = data;
      },
      error => {
        console.log('Error fetching companies',error);
      }
    )
  }

  companyClicked = (company: Company): void => {
    this.selectedCompany = company; // Update the selected company
    this.companyService.getVacanciesByCompany(company.id).subscribe(
      data => {
        this.vacancies = data;
      },
      error => {
        console.error('Error fetching vacancies', error);
      }
    );
  };

  createCompany() {
    // Logic for creating a new company
  }

  editCompany(company: Company) {
    // Logic for editing an existing company
  }

  deleteCompany(company: Company) {
    // Logic for deleting a company
  }

  // CRUD operations for Vacancy
  createVacancy() {
    // Logic for creating a new vacancy
  }

  editVacancy(vacancy: Vacancy) {
    // Logic for editing an existing vacancy
  }

  deleteVacancy(vacancy: Vacancy) {
    // Logic for deleting a vacancy
  }
}

