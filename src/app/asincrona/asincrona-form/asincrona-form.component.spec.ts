import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsincronaFormComponent } from './asincrona-form.component';

describe('AsincronaFormComponent', () => {
  let component: AsincronaFormComponent;
  let fixture: ComponentFixture<AsincronaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsincronaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsincronaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
