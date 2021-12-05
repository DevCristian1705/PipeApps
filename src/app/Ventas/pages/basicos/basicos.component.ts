import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  nombreLower = 'franklin'
  nombreUpper = 'FRANKLIN '
  nombreCompleto = 'FraNkLin AsTO'

  fecha : Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
