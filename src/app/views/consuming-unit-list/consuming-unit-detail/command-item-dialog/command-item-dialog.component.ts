import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Product } from 'src/app/shared/model/product.model';

import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-command-item-dialog',
  templateUrl: './command-item-dialog.component.html',
  styleUrls: ['./command-item-dialog.component.css']
})
export class CommandItemDialogComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CommandItemDialogComponent>
    ) { }
  public itemForm: FormGroup;

  products: Product[]

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      product: ['', [Validators.required]],
      quantity: ['', [Validators.required]]
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
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

  getAllProducts(){
    this.productService.getProducts().subscribe(data => this.products = data)
  }

}
