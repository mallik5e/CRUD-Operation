import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})

export class ItemFormComponent {
  itemForm: FormGroup;

  constructor(private fb: FormBuilder, private itemService: ItemService) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.itemService.addItem(this.itemForm.value).subscribe();
  }
}
