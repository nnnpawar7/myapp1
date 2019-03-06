import { Component, OnInit } from "@angular/core";
import { StudentModel } from "../../models/Student.model";
import { StudentsService } from "../../services/StudentsService.service"
@Component({
  selector: 'student-list',
  templateUrl: './StudentList.component.html',
  providers: [StudentsService]
})

export class StudentList implements OnInit {
  Students: StudentModel[]
  constructor(private _StudentService: StudentsService) {
  }
  ngOnInit() {
    this._StudentService.getStudents().subscribe(
      x => {
        this.Students = x
      },
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );
  }

}
