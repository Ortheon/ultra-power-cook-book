import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeComponent} from './recipe/recipe.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeInfoComponent} from './recipe/recipe-info/recipe-info.component';
import {RecipeEditComponent} from './recipe/recipe-edit/recipe-edit.component';
import {RecipeStartComponent} from './recipe/recipe-start/recipe-start.component';
import {SignupComponent} from './authentication/signup/signup.component';
import {LoginComponent} from './authentication/login/login.component';
import {AuthenticationGuard} from './authentication/authentication.guard';

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
    ],
    canActivate: [AuthenticationGuard]
  },
  {path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthenticationGuard]},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
