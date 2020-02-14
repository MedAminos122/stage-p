import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { ApiResponse } from './api-response';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  baseUrl:string="http://localhost/htdocs/crud/gestionhr/";
  createEmployee(employee:Employee):Observable<ApiResponse>
  {
return this.http.post<ApiResponse>(this.baseUrl+"insert.php",employee);
  }
  getemployees()
{
  return this.http.get<Employee []>(this.baseUrl+"list.php");
}
deleteEmployee(t : Employee)
{
  return this.http.delete<Employee []>(this.baseUrl+"delete.php?cnss="+t.cnss);
}


getById(v1:number) : Observable<ApiResponse>
{
return this.http.get<ApiResponse>(this.baseUrl+"getbyid2.php?cnss=" + v1);
}
update(employee : Employee):Observable<ApiResponse>
{
  return this.http.post<ApiResponse>(this.baseUrl+"update.php",employee);
}

login(loginData) :Observable<ApiResponse>
{
return this.http.post<ApiResponse>(this.baseUrl+'login.php',loginData);
}
}
