import { Component, OnInit } from '@angular/core';
import { ItemList } from '../model/item-list.model';
import { Item } from '../model/item.model';
import { from } from 'rxjs';
import { Entry } from '../model/entry.model';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  FormsModule,
  Validators
 
} from '@angular/forms';



@Component({
  selector: 'app-user-entry',
  templateUrl: './user-entry.component.html',
  styleUrls: ['./user-entry.component.css']
})
export class UserEntryComponent implements OnInit {
  list1: Item[] = [
    { id: "S1A1N1U01", name: 'Anker milk powder 400g', rate: 350, dis: 0 },
    { id: "S1A2N1U01", name: 'Maliban milk powder 400g', rate: 300, dis: 0 },
    { id: "S1A1N1U03", name: 'Anker milk powder 1kg', rate: 100, dis: 0 },
    { id: "S1A2N1U03", name: 'Maliban milk powder 1kg', rate: 100, dis: 0 },
    { id: "S1A3N1U01", name: 'Raththi milk powder 400g', rate: 100, dis: 0 },
    { id: "S1A3N1U03", name: 'Raththi milk powder 1kg', rate: 100, dis: 0 },
    { id: "S1A1N1U02", name: 'Anker milk powder 800g', rate: 100, dis: 0 },
    { id: "S1A2N1U02", name: 'Maliban milk powder 800g', rate: 100, dis: 0 },
    { id: "S1A3N1U02", name: 'Raththi milk powder 800g', rate: 100, dis: 0 },
    { id: "S1A1N2U02", name: 'Anker butter 800g', rate: 100, dis: 0 }
  ];
  itemList:any;

  entry: FormGroup;

  constructor() { }
  
  ngOnInit() {
    this.itemList = this.list1;
    this.entry = new FormGroup({
      item: new FormGroup({
        id: new FormControl("", [Validators.required]),
        name: new FormControl(),
        rate: new FormControl(),
        dis: new FormControl()
      }),
      qty:new FormControl("", [Validators.required])

    })
    // console.log(this.itemList);
  }

}
