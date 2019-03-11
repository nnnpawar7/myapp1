import {Component, OnInit } from "@angular/core";
import {NgForm } from "@angular/forms";
import { StudentModel } from "../../models/Student.model"
import { StudentsService } from "../../services/StudentsService.service"

@Component({
  selector: 'create-student',
  templateUrl: './createStudent.component.html'
})

export class createStudent implements OnInit {
  // student = {
  //   address:{},
  //   PhotoPath:'assets/images/Students/_free-icons_png_512_2612547.png',
  //   PhotoPreview:false,
  //   grades: [{id: 75, name: "Dist"
  //   },
  //   { id: 60, name: "First"
  //   },
  //   { id: 55, name: "Second"
  //   },
  //   { id: 50, name: "H.second"
  //   },
  //   { id: 40, name: "Pass"
  //   }]
  // }
  student = new StudentModel('Nilesh', '1994-06-16', 'nilesh.pawar@atit.com', { city: 'LA', road: '52' }, 'Male', 4, true, {id:75,name:'first'}, 999, 'assets/images/Students/_free-icons_png_512_2612547.png', true)
  

  constructor(private StudentsService: StudentsService) {}
  createStudent(studentForm: NgForm) {
    console.log(studentForm.value)
  }
  ngOnInit() {
    // console.log(this.StudentModel)
    this.StudentsService.getStudent()
    .subscribe(data=>{
      console.log(data)
      this.student=data;
      this.student.fname=null
    })
  }
  preview() {
    this.student.PhotoPreview = !this.student.PhotoPreview
  }
}
