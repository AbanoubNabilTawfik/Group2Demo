import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContacOverviewComponent } from './contac-overview/contac-overview.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/employees',pathMatch:'full'},
  {path:'employees',component:EmpListComponent},
  {path:'departments',component:DepartmentListComponent},
  {path:'departments/:id',
  component:DepartmentDetailsComponent,
  children:[
    {path:'overview',component:ContacOverviewComponent},
    {path:'info',component:ContactInfoComponent}
  ]
  },
  {path:'**',component:PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
