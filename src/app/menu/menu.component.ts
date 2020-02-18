import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  b;
  logout()
  {
 this.a.session=false;
    this.router.navigate(['login']);

  }
  constructor(private router:Router,private a:EmployeeService) { }

  ngOnInit() {
  }

}
