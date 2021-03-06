import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { AuthModule } from 'src/auth/auth.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TemplateRefrenceVariableComponent } from './template-refrence-variable/template-refrence-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { SquarePipe } from './square.pipe';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmployeeService } from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import { DepartmentListComponent } from './department-list/department-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ContacOverviewComponent } from './contac-overview/contac-overview.component';
import { TdfComponent } from './tdf/tdf.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    LeftNavComponent,
    RightNavComponent,
    MainBodyComponent,
    DataBindingComponent,
    EventBindingComponent,
    TemplateRefrenceVariableComponent,
    TwoWayBindingComponent,
    StructuralDirectivesComponent,
    //PipesComponent,
    SquarePipe,
    ChildComponent,
    ParentComponent,
    EmpListComponent,
    EmpDetailsComponent,
    DepartmentListComponent,
    PageNotFoundComponent,
    DepartmentDetailsComponent,
    ContactInfoComponent,
    ContacOverviewComponent,
    TdfComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
