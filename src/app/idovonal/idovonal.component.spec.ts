import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdovonalComponent } from './idovonal.component';

describe('IdovonalComponent', () => {
  let component: IdovonalComponent;
  let fixture: ComponentFixture<IdovonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdovonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdovonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
