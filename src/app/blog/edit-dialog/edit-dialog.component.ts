import { Component } from '@angular/core';
import { BlogPost } from '../interfaces/blog.interfaces';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent {

  constructor( private blogService: BlogService) {}

  newPost: BlogPost = this.blogService.dataPost;

  get dialogTitle() {
    return this.blogService.titleDialog;
  }

  get categories() {
    return this.blogService.categories;
  }

  accionar(): void {
    
    if(this.newPost.title.trim().length === 0 || this.newPost.category.length === 0) {
      return;
    }

    if(this.dialogTitle === "Edit Post"){
      this.blogService.editPost( this.newPost );
    }else{
      this.blogService.addPost( this.newPost );
    }

  }
  
}
