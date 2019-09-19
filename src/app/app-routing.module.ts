import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeComponent} from './recipe/recipe.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeInfoComponent} from './recipe/recipe-info/recipe-info.component';
import {RecipeEditComponent} from './recipe/recipe-edit/recipe-edit.component';
import {RecipeStartComponent} from './recipe/recipe-start/recipe-start.component';
import {AuthenticationComponent} from './authentication/authentication.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipeComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeInfoComponent,
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
      }
    ]
  },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'authentication', component: AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
