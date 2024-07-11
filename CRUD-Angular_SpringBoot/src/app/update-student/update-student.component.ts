import { Component } from '@angular/core';
import { Student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [],
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent {

     constructor(private activeRouter: ActivatedRoute, private studentService: StudentServiceService,private router:Router){}

     sid!:number;
     student: Student = new Student();

     ngOnInit():void{
        this.sid=this.activeRouter.snapshot.params['sid'];
        this.studentService.getStudentById(this.sid).subscribe(data=>{
          this.student=data;
        })
     }

    updateStudentData(){
            this.studentService.updateStudentData(this.student).subscribe(data=>{
              alert("Updated successfully");
              this.router.navigate(['/students']);
            },error=>alert("Sorry unable to Update"));
    }
}
