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
  cols: {title: string, key: string}[] = [
    {key: 'id', title: '#'},
    {key: 'first_name', title: 'First Name'},
    {key: 'last_name', title: 'Last Name'},
    {key: 'email', title: 'Email'},
    {key: 'gender', title: 'Gender'},
    {key: 'address', title: 'Address'},
  ];

  list$: Observable<any[]> = this.employeeService.get();

  constructor(
    private employeeService: EmployeeService,
  ) {}

}
