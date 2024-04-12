import { Component, OnInit, Input } from '@angular/core';
import { Vacancy } from '../models/vacancy';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrl: './vacancies.component.css'
})

export class VacanciesComponent implements OnInit {
  @Input() companyId!: number;
  vacancies: Vacancy[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    if (this.companyId) {
      this.companyService.getVacanciesByCompany(this.companyId).subscribe((data: Vacancy[]) => {
        this.vacancies = data;
      });
    }
  }
}