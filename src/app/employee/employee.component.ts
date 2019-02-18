import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {EmployeeService} from './employee.service';
import { IEmployee } from './employee';
import { map, retry, catchError } from 'rxjs/operators';


@Component({
    selector: 'app-employee',
    templateUrl: './employee.component.html',
})

export class EmployeeComponent implements OnInit {
    firstname: string = 'Tom';
    lastname: string = 'Cruz';
    gender: string = 'Male';
    age: number = 51;
    imagepath: string = '../../assets/images/Folder.png';
    isDisabled: boolean = true;
    name1: string = 'NILESH';
    empDetails: IEmployee;

    constructor(private _activatedRoute: ActivatedRoute, private _employeeService: EmployeeService) {
    }

    ngOnInit(): void {
        const EmpCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeesDetails(EmpCode).then(data => {
            this.empDetails = data;
            console.log(this.empDetails)
        }).catch((err) => {
            console.log('--', err)
        })
    }
}
