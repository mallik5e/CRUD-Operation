import { Component } from '@angular/core';
import { StudentServiceService } from '../student-service.service';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
      constructor(private studentService: StudentServiceService, private router:Router){}

      students: Student[]=[];

      nfOnInit():void{
         this.studentService.getAllStudent().subscribe(data=>{
          this.students=data;
         })
      }

      updateStudent(sid:number){
          this.router.navigate(["update-student",sid]);
      }
}
