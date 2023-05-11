import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})
export class CreateComponent {
	@ViewChild(NgForm, { static: true }) form!: ElementRef<HTMLInputElement>

	constructor(private postService: PostService, private router: Router) { }
	
	get userId() {
		return localStorage.getItem("_id")
	}

	handleSave(form: NgForm) {
		if (this.userId && !form.invalid) {
			this.postService.createPost(this.userId, form.value ).pipe(take(1)).subscribe({
				next: () => this.router.navigate(["/posts"])
			})
		}
	}

	handleCancel() {
		this.router.navigate(["/posts"])
	}
}
