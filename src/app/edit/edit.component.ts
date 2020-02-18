import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { error } from 'util';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
EditForm:FormGroup;
trevail:boolean;
employee:Employee[];
token:any;
  constructor(private formBuilder:FormBuilder,private apiService:EmployeeService,private router:Router,private routes:ActivatedRoute) { }

  ngOnInit() {
   /* this.token=window.localStorage.getItem('token');
    if(!this.token)
    {
      this.router.navigate(['login']);
    }*/
    if(this.apiService.session==false)
    {
      this.router.navigate(['login']);
    }
    const v=this.routes.snapshot.params;
   // console.log(v.cnss);
   this.trevail=true;
    this.EditForm=this.formBuilder.group(
      {
        cnss :[],
       // cnss: new FormControl({value: v, disabled: true}, Validators.required),
        nom : ['',[Validators.required,Validators.maxLength(255)]],
        prenom : ['',[Validators.required,Validators.maxLength(255)]],
        age : ['',[Validators.required,Validators.maxLength(255)]],
        date_debut : ['',[Validators.required,Validators.maxLength(255)]],
        date_fin : ['',[Validators.required,Validators.maxLength(255)]],
        type_contract : ['',[Validators.required,Validators.maxLength(255)]],
        nbr_enfant : ['',[Validators.required,Validators.maxLength(255)]]

      }
    );
    
    this.apiService.getById(v.cnss).subscribe(
      (data : any)=>{this.EditForm.patchValue(data);}
      );
  }
  onUpdate()
  {
   // console.log(this.EditForm.value);
   this.apiService.update(this.EditForm.value).subscribe(
     ()=>{this.router.navigate(['view']);},
     error=>{//alert(error);
    console.log(error);
    }
     
   );
  }

}
