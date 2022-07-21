import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrwComponent } from './crw.component';

describe('CrwComponent', () => {
  let component: CrwComponent;
  let fixture: ComponentFixture<CrwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
