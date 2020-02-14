import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path: '', redirectTo:'login',pathMatch:'full'},
  {path:'ajout',component:AddComponent},
  {path:'view',component:ViewComponent},
  {path:'modifier/:cnss',component:EditComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
