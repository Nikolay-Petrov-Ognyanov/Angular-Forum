import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { take } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})
export class CreateComponent {
	@ViewChild(NgForm, { static: true }) form!: ElementRef<HTMLInputElement>

	constructor(private postService: PostService) {}

	handleSave(form: NgForm) {
		if (!form.invalid) {
		}
		this.postService.createPost(form.value).pipe(take(1)).subscribe({
			next: post => console.log(post)
		})
	}

	handleCancel() {
		
	}
}
