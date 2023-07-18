import { Component } from '@angular/core';
import { authors, Author } from '../authors.model';

@Component({
  selector: 'author-list',
  template: `
  <author-details 
  *ngFor="let author of authors" 
  [author]="author" 
  (select)="onSelected($event)"
  (del)="onDel($event)"
  ></author-details>
  
  <div>
    current selected author: {{currentAuthor?.firstName}} - {{currentAuthor?.lastName}}
  </div>
  `,
})
export class AuthorListComponent {
  authors = authors;
  currentAuthor = authors[0];

  onSelected(selectedAuthor: Author) {
    this.currentAuthor = selectedAuthor;
  }

  onDel(id: number) {
    this.authors = this.authors.filter((author) => {
      return author.id != id;
    });
    if (this.currentAuthor.id === id) {
      this.currentAuthor = this.authors[0];
    }
  }
}
