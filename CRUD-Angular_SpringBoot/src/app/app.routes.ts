import { Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

export const routes: Routes = [
  {path: 'students',component:StudentListComponent},
  {path:'addStudent',component:CreateStudentComponent},
  {path:'',component:StudentListComponent},
  {path:'update-student/:sid',component: UpdateStudentComponent}
];
