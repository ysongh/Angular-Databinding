import { Component } from '@angular/core';

@Component({
    selector: 'username-input',
    templateUrl: './username.component.html'
})

export class UsernameComponent{
    username = '';
    isEmpty = false;
    
    onUpdateUsername(event: Event){
        if(this.username !== ''){
            this.isEmpty = true;
        }
        else{
            this.isEmpty = false;
        }
    }
    
    onReset(){
        this.username = '';
        this.isEmpty = false;
    }
}