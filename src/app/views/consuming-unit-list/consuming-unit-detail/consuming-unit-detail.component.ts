import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CommandItemDialogComponent } from './command-item-dialog/command-item-dialog.component';

@Component({
  selector: 'app-consuming-unit-detail',
  templateUrl: './consuming-unit-detail.component.html',
  styleUrls: ['./consuming-unit-detail.component.css']
})
export class ConsumingUnitDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog
    ) { }

  unitId: number

  ngOnInit(): void {
    this.unitId = this.route.snapshot.params['id'];
  }

  addItem(){
    const dialogRef = this.dialog.open(CommandItemDialogComponent, {
      width: '250px'
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}


