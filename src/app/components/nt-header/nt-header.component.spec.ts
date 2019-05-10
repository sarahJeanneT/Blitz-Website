import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtHeaderComponent } from './nt-header.component';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpLoaderFactory } from '../../app.module';

import { NtHeaderSubComponent } from './nt-header-sub/nt-header-sub.component';
import { AuthenticationService } from '../../services/authentication.service';
import { ProfileService } from '../../services/profile.service';
import { InternationalizationService } from '../../services/internationalization.service';
import { RouterTestingModule } from '@angular/router/testing';


describe('NtHeaderComponent', () => {
  let component: NtHeaderComponent;
  let fixture: ComponentFixture<NtHeaderComponent>;
  let translate: TranslateService;
  let http: HttpTestingController;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NtHeaderComponent,
        NtHeaderSubComponent
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
        AuthenticationService,
        ProfileService,
        InternationalizationService
      ]
    })
    .compileComponents();
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
