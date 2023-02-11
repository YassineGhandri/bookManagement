import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book_list/single-book/single-book.component';
import { BookFormComponent } from './book_list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { BooksService } from './service/books.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
const appRoutes:Routes =[
  {path:'books', canActivate:[AuthGuardService], component: BookListComponent},
  {path:'auth/signup', component: SignupComponent},
  {path:'auth/signin', component: SigninComponent},
  {path:'books/new',canActivate:[AuthGuardService], component: BookFormComponent},
  {path:'books/view/:id', component: SingleBookComponent},
  {path:'', redirectTo:'books', pathMatch:'full'},
  {path:'**', redirectTo:'books'}
];


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    
  ],
  providers: [
    AuthService,
    AuthGuardService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
