import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

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
import { LogInterceptor } from './core/log.interceptor';
import { RequestComponent } from './request/request.component';


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
    RequestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
