import { Component } from '@angular/core';

@Component({
    selector: 'username-input',
    templateUrl: './username.component.html'
})

export class UsernameComponent{
    username = '';
    isEmpty = false;
}