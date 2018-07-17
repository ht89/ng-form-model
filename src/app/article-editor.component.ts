import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'article-editor',
    template: `
        <form #f="ngForm" (ngSubmit)="saveArticle(f)">
            <div ngModelGroup="article">
                <p><input placeholder="Article title" ngModel name="title"></p> 
                <p><textarea placeholder="Article text" ngModel name="text"></textarea></p> 
            </div>
            <p><button type="submit">Save</button></p>
        </form>
    `
})
export class ArticleEditorComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

    saveArticle(f: NgForm): void { 
        console.log(f);
        console.log(f.form.controls);
    }

}