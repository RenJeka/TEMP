import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    password: string;
    userLogin: string;
    message: string;

    constructor(public authService: AuthService, public router: Router) {
        this.setMessage();
    }
    setMessage() {
        this.message = "Logged " + (this.authService.isLoggedIn ? "in" : "out");
    }

    login() {
        this.message = "Trying to log in ...";
        this.authService.login(this.userLogin, this.password).subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                // Получение строки для перенаправления от сервиса
                // если строки нет перенаправляем на страницу по умолчнанию
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : "/settings";
                // перенапраление пользователя
                this.router.navigate([redirect]);
            }
        });
    }

    logout() {
        this.authService.logout();
        this.setMessage();
    }

}
