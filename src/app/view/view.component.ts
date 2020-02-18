import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Router , ActivatedRoute } from '@angular/router';
import { FormBuilder ,FormGroup,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
token:any;
search:string;
  constructor(private apiService:EmployeeService,private router :Router,private routes:ActivatedRoute,private formbuilder:FormBuilder) { }
  Employee: Employee[];
  ngOnInit() {
    if(this.apiService.session==false)
    {
      this.router.navigate(['login']);
    }
    //this.token=window.localStorage.getItem('token');
    //console.log(this.token);
   /* if(!this.token)
    {
      this.router.navigate(['login']);
    }*/
    this.apiService.getemployees()
    .subscribe((data: any)=> 
    {this.Employee=data;
    console.log(this.Employee);}
    );
  }
  Supprimer(t:Employee)
  {
    
      this.apiService.deleteEmployee(t)
      .subscribe(
        data=>{this.Employee=this.Employee.filter(u =>u !== t);}
      );
  }
  modifier(employee:Employee)
  {

this.router.navigate(['modifier/'+employee.cnss]);
  }
  ajouter()
  {
    this.apiService.session=true;
    this.router.navigate(['ajout']);
  }
  logout()
  {
 this.apiService.session=false;
    this.router.navigate(['login']);

  }

}
