import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators , FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactiveDynamic';
  myForm!: FormGroup;

  constructor( private formBuilder: FormBuilder){}

  // ngOnInit() {
  //   this.myForm = this.formBuilder.group({
  //     custName: ['Sammy'],
  //     email: ['', [Validators.required, Validators.email]],
  //     shopName:[''],
  //     units: this.formBuilder.array([
  //       // load first row at start
  //       this.getUnit()
  //    ])
  //   });
  //   console.log("jjj: ",this.myForm.controls['units']);
  //   console.log("kkk: ",this.myForm.controls['units'].value[0]);
    
  // }
  // onSubmit(form: FormGroup) {
  //   console.log('Valid?', form.valid); // true or false
  //   console.log('Name', form.value.custName);
  //   console.log('Email', form.value.email);
  //   console.log('Message', form.value.shopName);
  // }
  // private getUnit() {
  //   const numberPatern = '^[0-9.,]+$';
  //   return this.formBuilder.group({
  //     unitName: ['', Validators.required],
  //     qty: [1, [Validators.required, Validators.pattern(numberPatern)]],
  //     unitPrice: ['', [Validators.required, Validators.pattern(numberPatern)]],
  //     unitTotalPrice: [{value: '', disabled: true}]
  //   });
  // }
  // addUnit() {
  //   const control = <FormArray>this.myForm.controls['units'];
  //   control.push(this.getUnit());
  // }
}
