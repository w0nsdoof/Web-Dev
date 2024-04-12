import {Component, OnInit} from '@angular/core';
import { CompanyService } from './services/company.service';
import {throwError} from 'rxjs';
// import { Company } from './models/company';
// import { CompaniesComponent } from './companies/companies.component';
// import { Vacancy } from './models/vacancy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  public companies;
  public vacancies;

  constructor(private _companyService: CompanyService){}

  ngOnInit(){
    this._companyService.getCompanies()
    this.vacancies = {};
  }
}
