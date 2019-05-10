import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipSubscriptionComponent } from './membership-subscription.component';
import { NtWizzardComponent } from '../../nt-wizzard/nt-wizzard.component';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpLoaderFactory } from '../../../app.module';
import { AlertComponent } from '../../shared/alert/alert.component';
import { MembershipService } from '../../../services/membership.service';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../../services/authentication.service';

describe('MembershipSubscriptionComponent', () => {
  let component: MembershipSubscriptionComponent;
  let fixture: ComponentFixture<MembershipSubscriptionComponent>;
  let translate: TranslateService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MembershipSubscriptionComponent,
        NtWizzardComponent,
        AlertComponent
      ],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        RouterTestingModule
      ],
      providers: [
        TranslateService,
        HttpClient,
        HttpHandler,
        HttpTestingController,
        MembershipService,
        AuthenticationService
      ]
    })
    .compileComponents();
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
