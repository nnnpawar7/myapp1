import { Injectable } from '@angular/core';
import { IEmployee } from '../models/employee';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeService } from './employee.service';

@Injectable()

export class EmployeeListResolverService implements Resolve<IEmployee[]> {
    constructor(private _EmployeeService: EmployeeService) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEmployee[]> {
        return this._EmployeeService.getEmployees();
    }
}
