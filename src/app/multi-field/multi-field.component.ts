import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-field',
  templateUrl: './multi-field.component.html',
  styleUrls: ['./multi-field.component.scss']
})
export class MultiFieldComponent {
  myForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ){
    this.myForm=this.fb.group({
      units:this.fb.array([])
    })
  }

  ngOnInit() {
    this.addUnit()
  }
  get unitForms(){
    return this.myForm.get('units') as FormArray
  }

  addUnit(){
    const unit=this.fb.group({
      productName:[],
      quantity:[],
      price:[]
    })
    this.unitForms.push(unit);
  }

  deleteUnit(index:any){
    console.log("index: ",index);
    
    this.unitForms.removeAt(index)
  }

  submitData(value: any){
    console.log("submitted value : ",value);
    
  }

}
