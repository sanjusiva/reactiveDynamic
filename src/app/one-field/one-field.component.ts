import { Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-one-field',
  templateUrl: './one-field.component.html',
  styleUrls: ['./one-field.component.scss']
})
export class OneFieldComponent {
  catArray = new FormArray([new FormControl()]);

  ngOnInit() {}

  addInputControl() {
    this.catArray.push(new FormControl());
  }

  removeInputControl(idx: number) {
    this.catArray.removeAt(idx);
  }
}
