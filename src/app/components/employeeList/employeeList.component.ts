import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { timer, interval } from 'rxjs';
import { map, retryWhen, retry, delay, catchError, tap,take, delayWhen, scan} from 'rxjs/operators';
@Component({
  selector: 'app-employee-list',
  styleUrls: ['./employeeList.component.css'],
  templateUrl: './employeeList.component.html'
})

export class EmployeeListComponent implements OnInit {
  empList: IEmployee[];
  selectedEmployeeCountRadioButton: string = 'All';
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService.getEmployees()
      .pipe(
        map(res => {
          if (!res) {
            throw new Error('Value expected!');
          } else {
            return res;
          };
        }),
        retryWhen(errors =>
            errors.pipe(
                tap(val => console.log('Value ',val.error.message, 'was too high!')),
                delay(3000),take(3)
            )
        ),
        catchError(err => {
          console.log(err);
          return (err)
        })
    ).subscribe(data => {
      var dta = [];
      dta.push(data)
      this.empList = dta[0];
    });
  }
  computeSalary(Salary: number): number {
    return Salary / 12;
  }
  trackByEmpCode(index, employee): string {
    return employee.empCode;
  }
  getEmpCount(): number {
    return this.empList.length;
    // return 8;
  }

  getMaleEmpCount(): number {
    return this.empList.filter(e => e.Gender === 'Male').length;
    // return 5;
  }

  getFemaleEmpCount(): number {
    return this.empList.filter(e => e.Gender === 'Female').length;
    // return 3;
  }

  onEmployeeCountRadioButtonChange(selectedRadioButton: string): void {
    this.selectedEmployeeCountRadioButton = selectedRadioButton;
  }
}
