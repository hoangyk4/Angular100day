import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../authors.model';

@Component({
  selector: 'author-details',
  template: `
    <div>
      {{author.firstName}} {{author.lastName}}
      <button style="margin-left: 1rem" (click)="select.emit(author)">Select</button>
      <button style="margin-left: 1rem" (click)="del.emit(author.id)">Del</button>
  </div>
  `,
})
export class AuthorDetailsComponent {
  @Input() author: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() del = new EventEmitter<number>();
}
