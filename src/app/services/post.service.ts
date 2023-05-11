import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class PostService {
	constructor(private http: HttpClient) { }

	createPost(authorId: string, formValue: NgForm) {
		const postData = { authorId, ...formValue}

		return this.http.post("http://localhost:3030/posts", postData)
	}

	readPosts() {
		return this.http.get("http://localhost:3030/posts")
	}

	readPost(postId: string) {
		return this.http.get(`http://localhost:3030/posts/${postId}`)
	}

	updatePost(postId: string, formValue: any) {
		return this.http.put(`http://localhost:3030/posts/${postId}`, formValue)
	}

	deletePost(postId: string) {
		return this.http.delete(`http://localhost:3030/posts/${postId}`)
	}
}