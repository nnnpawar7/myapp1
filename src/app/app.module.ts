import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employeeList/employeeList.component';
import { FormsModule } from '@angular/forms';
import { EmployeeTitlePipe } from './employee/employee.pipe';
import { EmployeeCountComponent } from './employeeCount/employeeCount.component';
import { EmployeeService } from './employee/employee.service';
import { HttpClientModule } from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';

const route: Route[] = [
  {path: 'home', component: HomeComponent},
  {path: 'list', component: EmployeeListComponent},
  {path: 'employee/:code', component: EmployeeComponent}
];

@NgModule({
  declarations: [EmployeeTitlePipe, HomeComponent, EmployeeCountComponent,
    EmployeeListComponent, AppComponent, EmployeeComponent],
  imports: [
    RouterModule.forRoot(route),
    BrowserModule, AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
