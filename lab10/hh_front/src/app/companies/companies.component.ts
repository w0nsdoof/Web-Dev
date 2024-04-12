import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.css'
})

export class CompaniesComponent {
  companies: Company[] = [];

  constructor(private companyService: CompanyService){}

  ngOnInit(){
    this.companyService.getCompanies().subscribe((data: Company[]) => {
      this.companies = data;
    });
  }

selectedCompany: Company | null = null;

selectCompany(company: Company): void {
  this.selectedCompany = company;
}

}
