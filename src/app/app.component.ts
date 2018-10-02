import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'comp-stuff';
  // firstname = 'robby';
  // counter = 6;

  theForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.theForm = this.fb.group({
      firstname: '',
      myCount: 0
    });
  }
}
