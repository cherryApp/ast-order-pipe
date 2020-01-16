import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from './service/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ast-filter-pipe';
  phrase = '';

  list$: Observable<any[]> = this.employeeService.get();

  constructor(
    private employeeService: EmployeeService,
  ) {}

}
