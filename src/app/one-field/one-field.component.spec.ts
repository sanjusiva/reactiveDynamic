import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OneFieldComponent } from './one-field.component';

describe('OneFieldComponent', () => {
  let component: OneFieldComponent;
  let fixture: ComponentFixture<OneFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,MatIconModule,MatCardModule,BrowserAnimationsModule],
      declarations: [ OneFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
