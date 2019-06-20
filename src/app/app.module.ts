import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectService } from './project.service'
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component'
import { AuthGuard } from './auth.guard'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'projects',
        component: ProjectListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'detail',
        component: ProjectDetailComponent,
        canActivate: [AuthGuard]
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ProjectService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
