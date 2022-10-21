import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { UserComponent } from './user/user.component';
import { MyFormComponent } from './sign-up/sign-upcomponent';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    MenuComponent,
    UserComponent,
    MyFormComponent,
    DeveloperComponent,
    SkillComponent,
    FormComponent,
    ListComponent,
    CocktailListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
