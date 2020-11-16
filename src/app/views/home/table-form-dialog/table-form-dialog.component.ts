import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ConsumingUnitService } from 'src/app/shared/service/consuming-unit.service';

@Component({
  selector: 'app-table-form-dialog',
  templateUrl: './table-form-dialog.component.html',
  styleUrls: ['./table-form-dialog.component.css']
})
export class TableFormDialogComponent implements OnInit {

  public tableForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ConsumingUnitService,
    public dialogRef: MatDialogRef<TableFormDialogComponent>
    ) { }

  ngOnInit(): void {
    this.tableForm = this.fb.group({
      number: ['', [Validators.required]],
      people: ['', [Validators.required]]
    });
  }

  cancel(): void {
    this.dialogRef.close();
    this.tableForm.reset();
  }

  createConsumingUnit(){
    this.service.postConsumingUnit(this.tableForm.value).subscribe(resule => {});
    this.dialogRef.close();
    this.tableForm.reset();
    window.location.reload();
  }
}
