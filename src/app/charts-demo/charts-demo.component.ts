import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Chart, registerables} from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-charts-demo',
  templateUrl: './charts-demo.component.html',
  styleUrls: ['./charts-demo.component.css']
})
export class ChartsDemoComponent implements OnInit {
  formObj : FormGroup | any;
  myPieChart : any = null;
  chartValues : any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.formObj = new FormGroup({
      firstValue : new FormControl('', [Validators.required, Validators.pattern(/-?\d+(\.\d{1,2})?/), Validators.max(100), Validators.min(0)]),
      secondValue : new FormControl('', [Validators.required, Validators.pattern(/-?\d+(\.\d{1,2})?/), Validators.max(100), Validators.min(0)])
    })
  }

onSubmit(){
  console.log(this.formObj)
  for(let key in this.formObj.value){
    this.chartValues.push(this.formObj.value[key])
  }
  console.log(this.chartValues)
  if(this.myPieChart != null){
    this.myPieChart.destroy();
  }
  this.myPieChart = new Chart("myChart", {
    type: "pie",
    data: {
      labels: ['Box1', 'Box2'],
      datasets: [{
        data:[this.chartValues[this.chartValues.length-2], this.chartValues[this.chartValues.length-1]],
        backgroundColor: ['orange', 'grey'],   
      }]
    },
  });
}

patchValueBox2(){
 if(this.formObj.value.firstValue !== '' && this.formObj.value.firstValue <= 100 && this.formObj.value.firstValue >= 0){
  this.formObj.patchValue({
    secondValue : (100 - this.formObj.value.firstValue)
  })
 }
}
patchValueBox1(){
  if(this.formObj.value.secondValue !== '' && this.formObj.value.secondValue <= 100 && this.formObj.value.secondValue >= 0){
    this.formObj.patchValue({
      firstValue : (100 - this.formObj.value.secondValue),
  
    })
  }
 
}
}
