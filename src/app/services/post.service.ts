import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class PostService {
	constructor(private http: HttpClient) { }

	createPost(formValue: NgForm) {
		return this.http.post("http://localhost:3030/posts", formValue)
	}

	getPosts() {
		return this.http.get("http://localhost:3030/posts")
	}

	getPost(id: string) {
		return this.http.get(`http://localhost:3030/posts/${id}`)
	}
}
