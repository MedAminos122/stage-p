import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  v:true;
  logout()
  {
    window.localStorage.removeItem('token');
    this.router.navigate(['login']);

  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
