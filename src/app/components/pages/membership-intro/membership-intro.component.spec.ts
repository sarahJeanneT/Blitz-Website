import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipIntroComponent } from './membership-intro.component';
import { NtWizzardComponent } from '../../nt-wizzard/nt-wizzard.component';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpLoaderFactory } from '../../../app.module';

describe('MembershipIntroComponent', () => {
  let component: MembershipIntroComponent;
  let fixture: ComponentFixture<MembershipIntroComponent>;
  let translate: TranslateService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MembershipIntroComponent,
        NtWizzardComponent
      ],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      providers: [
        TranslateService,
        HttpClient,
        HttpHandler,
        HttpTestingController,
      ]
    })
    .compileComponents();
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
