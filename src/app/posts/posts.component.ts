import { Component, OnInit } from '@angular/core';
import { Posts } from '../modules/posts';
import { ApiRestService } from '../service/api-rest.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html', 
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postsData: Posts;
  postsToDelete: Posts[] = [];

  constructor(
    public apirestService: ApiRestService) { }

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.apirestService.getPosts().subscribe(response => {
      console.log(response);
      this.postsData = response;
    })
  }
  
  

}
