import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css']
})
export class DetailsComponent {
	postId: any
	post: any

	constructor(
		private postService: PostService,
		private route: ActivatedRoute,
		private router: Router
	) {
		this.postId = this.route.snapshot.paramMap.get("postId")

		this.postService.readPost(this.postId).pipe(take(1)).subscribe({
			next: post => this.post = post,
			error: error => console.error(error)
		})
	}

	get userId() {
		return localStorage.getItem("_id")
	}

	handleUpdate(postId: string) {
		this.router.navigate([`/posts/${postId}/update`])
	}

	handleDelete(postId: string) {
		if (confirm(`Are you sure you want to delete ${this.post.title}?`)) {
			this.postService.deletePost(postId).pipe(take(1)).subscribe({
				next: () => this.router.navigate(["/posts"]),
				error: error => console.error(error)
			})
		}
	}
}