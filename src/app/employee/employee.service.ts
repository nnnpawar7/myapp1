import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import {HttpClient} from '@angular/common/http';
import {EmplyeeModel} from './IEmployee.model';
import { Observable} from 'rxjs';

@Injectable()
export class EmployeeService {
    configUrl = 'http://localhost:3000/things';
    constructor(private http: HttpClient) {

    }
    getEmployees(): Observable<IEmployee[]> {
        return this.http.get<EmplyeeModel[]>(this.configUrl);
    }
    getEmployeesDetails(empcode): Promise<IEmployee> {
        return this.http.get<IEmployee>(this.configUrl + '/' + empcode).toPromise()
        .catch();
    }
}
