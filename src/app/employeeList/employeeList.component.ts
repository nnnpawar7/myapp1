import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee/employee';
import { EmployeeService } from '../employee/employee.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-employee-list',
    styleUrls: ['./employeeList.component.css'],
    templateUrl: './employeeList.component.html'
})

export class EmployeeListComponent {
    empList: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';
    constructor(private _employeeService: EmployeeService) {
        this._employeeService.getEmployees()
        .subscribe(data => {
            this.empList = data;
        });
    }
    computeSalary(Salary: number): number {
        return Salary / 12;
    }
    trackByEmpCode(index, employee): string {
        return employee.empCode;
    }
    getEmpCount (): number {
        return this.empList.length;
        // return 8;
    }

    getMaleEmpCount (): number {
        return this.empList.filter(e => e.Gender === 'Male').length;
        // return 5;
    }

    getFemaleEmpCount (): number {
        return this.empList.filter(e => e.Gender === 'Female').length;
        // return 3;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButton: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButton;
    }
}
