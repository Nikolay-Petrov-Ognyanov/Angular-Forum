import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})
export class NavComponent {
	constructor(private userService: UserService) { }

	get accessToken() {
		return localStorage.getItem("accessToken")
	}

	handleLogout() {
		if (this.accessToken) {
			this.userService.logoutHandler(this.accessToken)

			localStorage.clear()
		}
	}
}