import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component({
    selector: 'authors',
    template: `
        <h2 [style.backgroundColor]="isActive ? 'blue' : ''">Authors</h2>
        {{ title }}
        <ul>
            <li *ngFor="#author of authors">
                {{ author }}
            </li>
        </ul>
    `,
    providers: [AuthorService]
})

export class AuthorsComponent {
    title:string = 'The title of authors page';
    authors:string[];
    isActive = true;

    constructor(authorService: AuthorService){
        this.authors = authorService.getAuthors();
    }
}