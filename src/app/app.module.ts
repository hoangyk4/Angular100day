import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HelloComponent } from './hello.component';
import { AppComponent } from './app.component';
import { AuthorListComponent } from './authors/author-list.component';
import { AuthorDetailsComponent } from './authors/author-details.component';

@NgModule({
  imports: [FormsModule, BrowserModule],
  declarations: [
    AppComponent,
    HelloComponent,
    AuthorListComponent,
    AuthorDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
