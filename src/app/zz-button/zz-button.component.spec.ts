import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZzButtonComponent } from './zz-button.component';

describe('ZzButtonComponent', () => {
  let component: ZzButtonComponent;
  let fixture: ComponentFixture<ZzButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZzButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZzButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
