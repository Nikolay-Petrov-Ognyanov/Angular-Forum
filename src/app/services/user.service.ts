import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from "@angular/forms"

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient,) { }

    registerHandler(formValue: NgForm) {
        return this.http.post("http://localhost:3030/users/register", formValue)
    }

    loginHandler(formValue: NgForm) {
        return this.http.post("http://localhost:3030/users/login", formValue)
    }

    logoutHandler(accessToken: string) {
        return this.http.post("http://localhost:3030/users/logout", accessToken)
    }
}