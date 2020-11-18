import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { CommandItem } from 'src/app/shared/model/command-item.model';
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
  selectedProduct: Product = new Product()
  commandItem: CommandItem = new CommandItem()
  products: Product[] = []
  myControl = new FormControl();
  filteredProducts: Observable<Product[]>;

  ngOnInit(): void {
    this.getAllProducts();
    this.itemForm = this.fb.group({
      quantity: ['', [Validators.required]]
    });
    this.filteredProducts = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): Product[] {
    const filterValue = value.toLowerCase();

    return this.products.filter(product => product.description.toLowerCase().indexOf(filterValue) === 0);
  }

  createItem(){
    this.commandItem.product = this.selectedProduct;
    this.commandItem.quantity = this.itemForm.value.quantity
    this.dialogRef.close();
    this.itemForm.reset();
    window.location.reload();
  }

  cancel(){
    this.dialogRef.close();
  }

  getAllProducts(){
    this.productService.getProducts().subscribe(data => this.products = data)
  }

  onSelected(product: Product){
    this.selectedProduct = product;
  }

}
