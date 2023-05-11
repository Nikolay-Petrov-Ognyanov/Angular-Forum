import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.css']
})
export class DetailsComponent {
	id: any
	post: any

	constructor(
		private postService: PostService,
		private route: ActivatedRoute
	) {
		this.id = this.route.snapshot.paramMap.get("id")

		this.postService.readPost(this.id).pipe(take(1)).subscribe({
			next: post => this.post = post
		})
	}

	get userId() {
		return localStorage.getItem("_id")
	}
}
