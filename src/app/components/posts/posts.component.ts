import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { BadRequestError } from '../../app-errors/bad-request-error';
import { NotFoundError } from 'rxjs';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.get().subscribe((response) => (this.posts = response));
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value };

    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post).subscribe({
      next: () => {},
      error: (error) => {
        this.posts.splice(0, 1);
        if (error instanceof BadRequestError) {
          // show error next to the inout form
        } else throw error;
      },
    });
  }

  updatePost(post: any) {
    this.service.update({ isRead: true });
  }

  deletePost(post: any) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe({
      next: () => {},
      error: (error) => {
        this.posts.splice(index, 0, post);
        if (error instanceof NotFoundError)
          alert('this post has already been deleted');
        else throw error;
      },
    });
  }
}
