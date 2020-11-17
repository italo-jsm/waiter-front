import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-command-item-dialog',
  templateUrl: './command-item-dialog.component.html',
  styleUrls: ['./command-item-dialog.component.css']
})
export class CommandItemDialogComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CommandItemDialogComponent>
    ) { }
  public itemForm: FormGroup;

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      product: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    });
  }

  createItem(){
    console.log(this.itemForm.value)
    // this.dialogRef.close();
    // this.itemForm.reset();
    // window.location.reload();
  }

  cancel(){
    this.dialogRef.close();
    this.itemForm.reset();
  }

}
