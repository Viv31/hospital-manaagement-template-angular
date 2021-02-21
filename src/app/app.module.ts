import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllPatientsComponent } from './all-patients/all-patients.component';
import { AllAppointmentsComponent } from './all-appointments/all-appointments.component';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { ViewPatientHistoryComponent } from './view-patient-history/view-patient-history.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';

const appRoutes:Routes=[
{path:'',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'registration',component:RegistrationComponent},
{path:'dashboard',component:DashboardComponent},
{path:'all-patients',component:AllPatientsComponent},
{path:'all-doctors',component:AllDoctorsComponent},
{path:'all-appointments',component:AllAppointmentsComponent},
{path:'view-appointment',component:ViewAppointmentComponent},
{path:'view-patient-history',component:ViewPatientHistoryComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    AllPatientsComponent,
    AllAppointmentsComponent,
    AllDoctorsComponent,
    ViewPatientHistoryComponent,
    ViewAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
