import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtHeaderSubComponent } from './nt-header-sub.component';


import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpLoaderFactory } from '../../../app.module';
import { RouterTestingModule } from '@angular/router/testing';


describe('NtHeaderSubComponent', () => {
  let component: NtHeaderSubComponent;
  let fixture: ComponentFixture<NtHeaderSubComponent>;
  let translate: TranslateService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtHeaderSubComponent ],
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
      ]
    })
    .compileComponents();
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtHeaderSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
