import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  baseURL = "http://localhost:8081/student";

  constructor(private httpClient: HttpClient) { }

  addStudent(student:Student): Observable<Object>{
    console.log(student);
     return this.httpClient.post(`${this.baseURL}`,student);
  }

  getAllStudent(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  getStudentById(sid:number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}/${sid}`)
  }

  updateStudentData(student: Student): Observable<Student>{
    return this.httpClient.post<Student>(`${this.baseURL}`,student);
  }
}
