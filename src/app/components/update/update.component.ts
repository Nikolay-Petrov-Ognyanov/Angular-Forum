import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Component({
	selector: 'app-update',
	templateUrl: './update.component.html',
	styleUrls: ['./update.component.css']
})
export class UpdateComponent {
	@ViewChild(NgForm, { static: true }) form!: ElementRef<HTMLInputElement>

	postId: any
	post: any

	constructor(
		private postService: PostService,
		private router: Router,
		private route: ActivatedRoute
	) {
		this.postId = this.route.snapshot.paramMap.get("postId")

		this.postService.readPost(this.postId).pipe(take(1)).subscribe({
			next: post => this.post = post,
			error: error => console.error(error)
		})
	}

	handleSave(form: NgForm) {
		const formValue = {
			title: form.value.title.trim() || this.post.title,
			content: form.value.content.trim() || this.post.content
		}

		this.postService.updatePost(this.postId, formValue).pipe(take(1)).subscribe({
			next: () => this.router.navigate(["/posts"])
		})
	}

	handleCancel() {
		this.router.navigate([`/posts/${this.postId}`])
	}
}