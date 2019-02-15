import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import {HttpClient} from '@angular/common/http';
import {EmplyeeModel} from './IEmployee.model';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
export interface Config {
    heroesUrl: string;
    textfile: string;
  }

@Injectable()
export class EmployeeService {
    configUrl = 'http://localhost:3000/things';
    constructor(private http: HttpClient) {

    }
    getEmployees(): Observable<IEmployee[]> {
        // return this.http.get<IEmployee[]>(this.configUrl)
        return this.http.get<EmplyeeModel[]>(this.configUrl);
        // return this.http.get(this.configUrl)
        // .map((response: Response) => {<EmplyeeModel[]>response.json() });
    }
    getEmployeesDetails(empcode): Observable<IEmployee> {
        // return this.http.get<IEmployee[]>(this.configUrl)
        return this.http.get<EmplyeeModel>(this.configUrl + '/' + empcode);
        // return this.http.get(this.configUrl)
        // .map((response: Response) => {<EmplyeeModel[]>response.json() });
    }
}
