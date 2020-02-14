import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
token:any;
  constructor(private _employeesService:EmployeeService,private router :Router) { }
  Employee: Employee[];
  ngOnInit() {
    this.token=window.localStorage.getItem('token');
    if(!this.token)
    {
      this.router.navigate(['login']);
    }
    this._employeesService.getemployees()
    .subscribe((data: Employee[])=> 
    {this.Employee=data;
    console.log(this.Employee);}
    );
  }
  Supprimer(t:Employee)
  {
    
      this._employeesService.deleteEmployee(t)
      .subscribe(
        data=>{this.Employee=this.Employee.filter(u =>u !== t);}
      );
  }
  modifier(employee:Employee)
  {

this.router.navigate(['modifier/'+employee.cnss]);
  }

}
