import { Component, OnInit } from '@angular/core';
import { SI, SII } from './SI';

@Component({
  selector: 'app-international-system-units',
  templateUrl: './international-system-units.component.html',
  styleUrls: ['./international-system-units.component.scss']
})
export class InternationalSystemUnitsComponent implements OnInit {

  millimetre: SII = new SI(1).milli.metre;
  metre: SII = new SI(1).metre;
  kilometre: SII = new SI(1).kilo.metre;
  milliampere: SII = new SI(32).milli.ampere;
  second: SII = new SI(1).second;

  distance: SII = new SI(40).metre;
  time: SII = new SI(12).second;
  velocity = this.distance.value / this.time.value;

  ngOnInit() {

  }

}
