import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms"
import { take } from 'rxjs';
import { UserService } from 'src/app/services/user.service';


@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    constructor(private userService: UserService) { }

    @ViewChild(NgForm, { static: true }) form!: ElementRef<HTMLInputElement>
    
    handleRegister(form: NgForm) {
        if (!form.invalid) {
            this.userService.registerHandler(form.value).pipe(take(1)).subscribe({
                next: data => {
                    localStorage.setItem("_id", Object.values(data)[0])
                    localStorage.setItem("username", Object.values(data)[1])
                    localStorage.setItem("accessToken", Object.values(data)[2])
                }
            })
        }
    }

    handleLogin(form: NgForm) {
        if (!form.invalid) {
            this.userService.loginHandler(form.value).pipe(take(1)).subscribe({
                next: data => {
                    localStorage.setItem("_id", Object.values(data)[0])
                    localStorage.setItem("username", Object.values(data)[1])
                    localStorage.setItem("accessToken", Object.values(data)[2])
                }
            })
        }
    }
}
