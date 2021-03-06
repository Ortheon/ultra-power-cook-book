import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeInfoComponent } from './recipe/recipe-info/recipe-info.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { EditComponent } from './shopping-list/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule, MatMenuModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RecipeService} from './shared/recipe.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { JwtModule } from '@auth0/angular-jwt';
import {AuthenticationGuard} from './authentication/authentication.guard';
// function that will retrieve the token
export function tokenGetter() {
  return localStorage.getItem('access_token');
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipeInfoComponent,
    ShoppingListComponent,
    EditComponent,
    RecipeStartComponent,
    DropdownDirective,
    LoginComponent,
    SignupComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    }),

  ],
  providers: [RecipeService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
