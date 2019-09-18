import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../../shared/shopping-list.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnDestroy {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }

}
