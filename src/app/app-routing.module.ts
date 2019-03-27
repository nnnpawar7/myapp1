import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, CanActivate } from '@angular/router';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employeeList/employeeList.component';
import { EmployeeCountComponent } from './components/employeeCount/employeeCount.component';
import { HomeComponent } from './components/home/home.component';
import { StudentList } from './components/StudentList/StudentList.component';
import { createStudent } from './components/createStudent/createStudent.component'
import { registerComponent } from './components/register/register.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GradePipe} from './pipes/grade.pipe';
import { EmployeeTitlePipe} from './pipes/employee.pipe';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
const route: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: EmployeeListComponent },
  { path: 'employee/:code', component: EmployeeComponent },
  { path: 'student/list', component: StudentList },
  { path: 'student/create', component: createStudent },
  { path: 'register', component: registerComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    GradePipe, EmployeeTitlePipe,
    registerComponent,
     createStudent, HomeComponent, EmployeeCountComponent,
    EmployeeListComponent, EmployeeComponent, StudentList],
  imports: [RouterModule.forRoot(route), FormsModule, CommonModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule implements CanActivate { }
