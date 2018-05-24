import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZzButtonnComponent } from './zz-buttonn.component';

describe('ZzButtonnComponent', () => {
  let component: ZzButtonnComponent;
  let fixture: ComponentFixture<ZzButtonnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZzButtonnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZzButtonnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
