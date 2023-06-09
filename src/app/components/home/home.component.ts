import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {
	posts$: any

	constructor(
		private postService: PostService,
		private router: Router
	) {
		this.posts$ = this.postService.readPosts()
	}

	handlePostCardClick(_id: any) {
		this.router.navigate([`posts/${_id}`])
	}
}
