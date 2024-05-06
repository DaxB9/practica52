import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { minimizeFunction } from 'src/utilities/methods';

@Component({
  selector: 'app-minimize-function',
  templateUrl: './minimize-function.component.html',
  styleUrls: ['./minimize-function.component.css']
})
export class MinimizeFunctionComponent implements OnInit {
  result: any = {};
  calculated: boolean = false;
  minimizeForm = new FormGroup({
    iterations : new FormControl('', Validators.required),
  })
  constructor() { }

  ngOnInit(): void {

  }
  calcular(){
    this.result = minimizeFunction(Number.parseInt(this.minimizeForm.value.iterations!));
    this.calculated = true;
  }

}
