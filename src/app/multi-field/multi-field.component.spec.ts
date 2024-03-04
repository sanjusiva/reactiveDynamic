import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiFieldComponent } from './multi-field.component';

describe('MultiFieldComponent', () => {
  let component: MultiFieldComponent;
  let fixture: ComponentFixture<MultiFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,MatCardModule,MatFormFieldModule,MatInputModule,BrowserAnimationsModule],
      declarations: [ MultiFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
