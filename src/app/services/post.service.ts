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

	readPost(id: string) {
		return this.http.get(`http://localhost:3030/posts/${id}`)
	}
}
