import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeTitlePipe } from './pipes/employee.pipe';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
import { StudentsService } from './services/StudentsService.service'
import { GradePipe } from './pipes/grade.pipe'
// import {registerComponent} from './components/register/register.component'

// const route: Route[] = [
//   {path: 'home', component: HomeComponent},
//   {path: 'list', component: EmployeeListComponent},
//   { path: 'employee/:code', component: EmployeeComponent },
//   { path: 'student/list', component: StudentList },
//   { path: 'student/create', component: createStudent},
//   {path:'register',component:registerComponent}
// ];

@NgModule({
  declarations: [
     AppComponent],
  imports: [
    // ReactiveFormsModule,
    // RouterModule.forRoot(route),
    BrowserModule,
     AppRoutingModule, 
    // FormsModule, 
    HttpClientModule
  ],
  providers: [EmployeeService, StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
