import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fn } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'count-me',
  templateUrl: './count-me.component.html',
  styleUrls: ['./count-me.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountMeComponent),
      multi: true
    }
  ]
})
export class CountMeComponent implements OnInit, ControlValueAccessor {
  _countValue = 0
  sendChanges = (_: any) => {}
  touchChanges = (_: any) => {}

  get countValue() {
    return this._countValue;
  }

  set countValue(value) {
    this._countValue = value;
    this.sendChanges(this._countValue);
    if (value >= 9) {
      this.touchChanges(this._countValue);
    }
  }

  ngOnInit(): void {
  }
  writeValue(value: any): void {
    this.countValue = value;
  }
  registerOnChange(fn: any): void {
    this.sendChanges = fn;
  }


  registerOnTouched(fn: any): void {
    this.touchChanges = fn;
  }
  // setDisabledState?(isDisabled: boolean): void {

  // }
  constructor() { }


  increase() {
    this.countValue++;
  }

  decrease() {
    this.countValue --;
  }

}


