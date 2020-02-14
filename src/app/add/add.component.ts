import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
addForm:FormGroup;
cnss : string;
        nom : string;
        prenom : string;
        age : string;
        date_debut : string;
        date_fin : string;
        type_contract : string;
        nbr_enfant : string;
        token:any;


  constructor(private formBuilder:FormBuilder,private apiService:EmployeeService,private router:Router) { }

  ngOnInit() {
    this.token=window.localStorage.getItem('token');
    if(!this.token)
    {
      this.router.navigate(['login']);
    }
    console.log(this.token);
    this.addForm=this.formBuilder.group(
      {
        cnss :[],
        nom : ['',[Validators.required,Validators.maxLength(255)]],
        prenom : ['',[Validators.required,Validators.maxLength(255)]],
        age : ['',[Validators.required,Validators.maxLength(255)]],
        date_debut : ['',[Validators.required,Validators.maxLength(255)]],
        date_fin : ['',[Validators.required,Validators.maxLength(255)]],
        type_contract : ['',[Validators.required,Validators.maxLength(255)]],
        nbr_enfant : ['',[Validators.required,Validators.maxLength(255)]]

      }
    );
  }
  onSubmit()
  {
    console.log(this.addForm.value);
   this.apiService.createEmployee(this.addForm.value)
   .subscribe(data =>
   {this.router.navigate(['view']);} 
    )
   
  }
  intialiser()
  {
    this.cnss=null;
    this.nom=null;
    this.prenom=null;
    this.age=null;
    this.date_debut=null;
    this.date_fin=null;
    this.type_contract=null;
    this.nbr_enfant=null;
  }

}
