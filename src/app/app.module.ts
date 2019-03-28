import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employeeList/employeeList.component';
import { FormsModule } from '@angular/forms';
import { EmployeeTitlePipe } from './pipes/employee.pipe';
import { EmployeeCountComponent } from './components/employeeCount/employeeCount.component';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentList } from './components/StudentList/StudentList.component';
import { StudentsService } from './services/StudentsService.service';
import { GradePipe } from './pipes/grade.pipe';
import { createStudent } from './components/createStudent/createStudent.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeeListResolverService } from './services/employee-list-resolver.service';

const route: Route[] = [
  {path: 'home', component: HomeComponent},
  {path: 'list', component: EmployeeListComponent, resolve: {employeeList: EmployeeListResolverService}},
  { path: 'employee/:code', component: EmployeeComponent },
  { path: 'student/list', component: StudentList },
  { path: 'student/create', component: createStudent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  declarations: [GradePipe, createStudent, EmployeeTitlePipe, HomeComponent, EmployeeCountComponent,
    EmployeeListComponent, AppComponent, EmployeeComponent, LoginComponent, StudentList],
  imports: [
    RouterModule.forRoot(route),
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [EmployeeService, StudentsService, EmployeeListResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
