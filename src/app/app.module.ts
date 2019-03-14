import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employeeList/employeeList.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeTitlePipe } from './pipes/employee.pipe';
import { EmployeeCountComponent } from './components/employeeCount/employeeCount.component';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StudentList } from './components/StudentList/StudentList.component';
import { StudentsService } from './services/StudentsService.service'
import { GradePipe } from './pipes/grade.pipe'
import { createStudent } from './components/createStudent/createStudent.component'
import {registerComponent} from './components/register/register.component'

const route: Route[] = [
  {path: 'home', component: HomeComponent},
  {path: 'list', component: EmployeeListComponent},
  { path: 'employee/:code', component: EmployeeComponent },
  { path: 'student/list', component: StudentList },
  { path: 'student/create', component: createStudent},
  {path:'register',component:registerComponent}
];

@NgModule({
  declarations: [GradePipe, registerComponent, createStudent, EmployeeTitlePipe, HomeComponent, EmployeeCountComponent,
    EmployeeListComponent, AppComponent, EmployeeComponent, StudentList],
  imports: [
    ReactiveFormsModule,
    RouterModule.forRoot(route),
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [EmployeeService, StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
