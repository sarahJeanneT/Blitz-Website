import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NtModalComponent } from './nt-modal.component';

import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpLoaderFactory } from '../../app.module';

import { MyModalService } from '../../services/my-modal/my-modal.service';

describe('NtModalComponent', () => {
  let component: NtModalComponent;
  let fixture: ComponentFixture<NtModalComponent>;
  let translate: TranslateService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NtModalComponent ],
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
        MyModalService,
        HttpClient,
        HttpHandler,
        HttpTestingController
      ]
    })
    .compileComponents();
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NtModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
