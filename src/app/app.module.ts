import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { UserService } from './services/user.service';
import { AuthenticationService } from './services/authentication.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReservationPageComponent } from './components/pages/reservation-page/reservation-page.component';
import { CalendarModule } from 'angular-calendar';
import { LogoutPageComponent } from './components/pages/logout-page/logout-page.component';
import { AcademicFieldService } from './services/academic-field.service';
import { AcademicLevelService } from './services/academic-level.service';
import { OrganizationService } from './services/organization.service';
import { UsersPageComponent } from './components/pages/admin/users-page/users-page.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MyTableComponent } from './components/my-table/my-table.component';
import { MyHttpInterceptor } from './my-http-interceptor';
import { UserPageComponent } from './components/pages/admin/user-page/user-page.component';
import { OrganizationsPageComponent } from './components/pages/admin/organizations-page/organizations-page.component';
import { AcademicsPageComponent } from './components/pages/admin/academics-page/academics-page.component';
import { MyModalComponent } from './components/my-modal/my-modal.component';
import { MyModalService } from './services/my-modal/my-modal.service';
import { RegisterConfirmationPageComponent } from './components/pages/register-confirmation-page/register-confirmation-page.component';
import { ActivationPageComponent } from './components/pages/activation-page/activation-page.component';
import { CanActivateViaAuthGuard } from './guards/CanActivateViaAuthGuard';
import { CanAccessAdminPanelGuard } from './guards/CanAccessAdminPanelGuard';
// tslint:disable-next-line:max-line-length
import { ForgotPasswordConfirmationPageComponent } from './components/pages/forgot-password-confirmation-page/forgot-password-confirmation-page.component';
import { ResetPasswordPageComponent } from './components/pages/reset-password-page/reset-password-page.component';
import { WorkplaceService } from './services/workplace.service';
import { WorkplacesComponent } from './components/pages/admin/workplaces/workplaces.component';
import { ProfileService } from './services/profile.service';

const appRoutes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'logout',
        component: LogoutPageComponent,
      },
      {
        path: 'register',
        component: RegisterPageComponent,
      },
      {
        path: 'register/confirmation',
        component: RegisterConfirmationPageComponent,
      },
      {
        path: 'register/activation/:token',
        component: ActivationPageComponent,
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordPageComponent,
      },
      {
        path: 'forgot-password/confirmation',
        component: ForgotPasswordConfirmationPageComponent,
      },
      {
        path: 'reset-password/:token',
        component: ResetPasswordPageComponent,
      },
      {
        path: 'reservation/:id',
        component: ReservationPageComponent,
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'admin/users',
        component: UsersPageComponent,
        canActivate: [
          CanActivateViaAuthGuard,
          CanAccessAdminPanelGuard,
        ]
      },
      {
        path: 'admin/users/:id',
        component: UserPageComponent,
        canActivate: [
          CanActivateViaAuthGuard,
          CanAccessAdminPanelGuard,
        ]
      },
      {
        path: 'admin/organizations',
        component: OrganizationsPageComponent,
        canActivate: [
          CanActivateViaAuthGuard,
          CanAccessAdminPanelGuard,
        ]
      },
      {
        path: 'admin/academics',
        component: AcademicsPageComponent,
        canActivate: [
          CanActivateViaAuthGuard,
          CanAccessAdminPanelGuard,
        ]
      },
      {
        path: 'admin/workplaces',
        component: WorkplacesComponent,
        canActivate: [
          CanActivateViaAuthGuard,
          CanAccessAdminPanelGuard,
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    AdminLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ForgotPasswordPageComponent,
    ReservationPageComponent,
    LogoutPageComponent,
    UsersPageComponent,
    MyTableComponent,
    UserPageComponent,
    OrganizationsPageComponent,
    AcademicsPageComponent,
    MyModalComponent,
    RegisterConfirmationPageComponent,
    ActivationPageComponent,
    ForgotPasswordConfirmationPageComponent,
    ResetPasswordPageComponent,
    WorkplacesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(),
    CalendarModule.forRoot()
  ],
  providers: [
    CanActivateViaAuthGuard,
    CanAccessAdminPanelGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    },
    MyModalService,
    UserService,
    AuthenticationService,
    AcademicFieldService,
    AcademicLevelService,
    OrganizationService,
    WorkplaceService,
    ProfileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
