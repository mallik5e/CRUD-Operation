import { Component } from '@angular/core';
import { Student } from '../student';
import { error } from 'console';
import { StudentServiceService } from '../student-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  standalone: true,
  imports: [],
  templateUrl: './create-student.component.html',
  styleUrl: './create-student.component.css'
})
export class CreateStudentComponent {
      student: Student = new Student();

      constructor(private studentService: StudentServiceService, private router: Router){

      }
      ngOnInit():void{

      }

      addStudentData(){
       this.studentService.addStudent(this.student).subscribe(data=>{
        alert("Student Data Insert Successfully");
        this.gotoListOfStudentPage();
       },error=>alert("Sorry Unable to insert Student Data"))
      }

      gotoListOfStudentPage(){
         this.router.navigate(['/students']);
      }
}

