import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { BlogPost } from '../interfaces/blog.interfaces';

@Component({
  selector: 'app-posts-grid',
  templateUrl: './posts-grid.component.html',
  styleUrls: ['./posts-grid.component.css']
})
export class PostsGridComponent {

  constructor( private blogService: BlogService, public  dialog: MatDialog) {}

  get posts() {
    return this.blogService.posts;
  }

  editar( post: BlogPost ): void {
    this.blogService.loadDataPost(2, post);
    const dialogRef = this.dialog.open(EditDialogComponent);
  }

  borrar( id: number ): void {
    this.blogService.deletePost(id);
  }

}
