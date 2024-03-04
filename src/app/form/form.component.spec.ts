import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule],
      declarations: [ FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should check addPhone method',fakeAsync(()=>{
    spyOn(component, 'addPhone');

    let button = fixture.debugElement.nativeElement.querySelector('.button');
    console.log("but: ",button);
    
    button.click();
  
    tick();
  
    expect(component.addPhone).toHaveBeenCalled();
  }))
});
