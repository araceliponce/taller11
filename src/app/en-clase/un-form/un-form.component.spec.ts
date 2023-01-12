import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnFormComponent } from './un-form.component';

describe('UnFormComponent', () => {
  let component: UnFormComponent;
  let fixture: ComponentFixture<UnFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
