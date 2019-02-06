import { LoginService } from './services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ManagerComponent } from './manager/manager.component';
import { SingleFormationComponent } from './formations/single-formation/single-formation.component';
import { ManageFormationsComponent } from './formations/manage-formations/manage-formations.component';
import { FourOFourComponent } from './four-ofour/four-ofour.component';

const appRoutes: Routes = [{ path: 'login', component:LoginComponent },
{ path: '', component: LoginComponent }, { path: 'user', component: UserComponent}, {path: 'not-found', component: FourOFourComponent}];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    ManagerComponent,
    SingleFormationComponent,
    ManageFormationsComponent,
    FourOFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
