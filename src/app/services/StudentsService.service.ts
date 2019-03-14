import { Injectable } from "@angular/core";
import { StudentModel } from "../models/Student.model"
import { Observable, of } from "rxjs";
import {HttpClient} from '@angular/common/http'
@Injectable()

export class StudentsService {
  constructor(private _http: HttpClient){
  }

  getStudent():Observable<StudentModel>{
    return this._http.get<StudentModel>('http://localhost:3003/student/one');
  }
  createStudent(student):any {
    return this._http.post('http://localhost:3003/student/create', student)
  }
  getStudents(): Observable < StudentModel[] > {
    return of([{
      ID: 1,
      dob: '1995-06-10',
      gender: 'Male',
      fname: 'Ravi',
      email: 'rvi@gore.com',
      Class: '1',
      address: { road: '21', city: 'NY' },
      grade: { id: 78, name: 'First' },
      contact: 9875451,
      isactive: true,
      PhotoPath: 'assets/images/Students/4e6c9641435441.57a5ca57a08fa.gif',
      PhotoPreview:true
    }, {
      ID: 2,
      dob: '1995-06-10',
      gender: 'Male',
      fname: 'Ravi',
      email: 'rvi@gore.com',
      Class: '1',
      address: { road: '21', city: 'NY' },
        grade: { id: 78, name: 'First' },
      contact: 9875451,
      isactive: true,
      PhotoPath: 'assets/images/Students/_free-icons_png_512_2612547.png',
        PhotoPreview: true
    }, {
      ID: 3,
      dob: '1995-06-10',
      gender: 'Male',
      fname: 'Ravi',
      email: 'rvi@gore.com',
      Class: '1',
      address: { road: '21', city: 'NY' },
      grade: {id:78,name:'First'},
      contact: 9875451,
      isactive: true,
      PhotoPath: 'assets/images/Students/Human_icon-icons.com_71855.png',
        PhotoPreview: true
    }]);
  }
}
