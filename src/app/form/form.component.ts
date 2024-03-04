import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.myForm = this.fb.group({
      custName: [''],
      shopName:[''],
      phones: this.fb.array([
        this.fb.control(null)
      ])
    })
  }
  ngOnInit(): void {
    
  }
  addPhone(): void {
    (this.myForm.get('phones') as FormArray).push(
      this.fb.control(null)
    );
  }

  removePhone(index:any) {
    (this.myForm.get('phones') as FormArray).removeAt(index);
  }

  getPhonesFormControls(): AbstractControl[] {
    console.log("called");
    
    return (<FormArray> this.myForm.get('phones')).controls
  }

  send(values:any) {
    console.log(values);
  }
 
}
