import { Component, OnInit } from '@angular/core';

import { ConsumingUnitService } from 'src/app/shared/service/consuming-unit.service';
import { ConsumingUnit } from 'src/app/shared/model/consuming-unit.model';

@Component({
  selector: 'app-consuming-unit-list',
  templateUrl: './consuming-unit-list.component.html',
  styleUrls: ['./consuming-unit-list.component.css']
})
export class ConsumingUnitListComponent implements OnInit {

  constructor(private consumingUnigService: ConsumingUnitService) { }


  consumingUnits: ConsumingUnit[];

  ngOnInit(): void {
    this.getConsumingUnits();
  }

  getConsumingUnits(){
    this.consumingUnigService.getConsumingUnits().subscribe(data => {
      this.consumingUnits = data;
    });
  }
}
