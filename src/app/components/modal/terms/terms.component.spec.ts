import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsComponent } from './terms.component';
import { NtModalComponent } from '../../nt-modal/nt-modal.component';
import { AlertComponent } from '../../shared/alert/alert.component';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpLoaderFactory } from '../../../app.module';
import { MyModalService } from '../../../services/my-modal/my-modal.service';

describe('TermsComponent', () => {
  let component: TermsComponent;
  let fixture: ComponentFixture<TermsComponent>;
  let translate: TranslateService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TermsComponent,
        NtModalComponent,
        AlertComponent
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
        MyModalService
      ]
    })
    .compileComponents();
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
