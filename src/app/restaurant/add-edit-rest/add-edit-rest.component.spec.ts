import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRestComponent } from './add-edit-rest.component';

describe('AddEditRestComponent', () => {
  let component: AddEditRestComponent;
  let fixture: ComponentFixture<AddEditRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
