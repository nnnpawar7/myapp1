import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import {HttpClient} from '@angular/common/http';
import {EmplyeeModel} from './IEmployee.model';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import {from} from 'rxjs';
import { CompileTemplateMetadata } from '@angular/compiler';
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
    getEmployeesDetails(empcode): Promise<IEmployee> {
        return this.http.get<EmplyeeModel>(this.configUrl + '/' + empcode).toPromise()
        .catch();
        // const emp = from(fetch(this.configUrl + '/' + empcode));
        // emp.subscribe({
        //     next(response) { console.log(response); },
        //     error(err) { console.log(err); },
        //     complete() { console.log('--'); }
        // });
        // return emp;
    }
}
