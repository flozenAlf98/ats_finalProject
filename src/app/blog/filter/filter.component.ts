import { Component } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { BlogPost } from '../interfaces/blog.interfaces';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor( private blogService: BlogService, public  dialog: MatDialog ) {}

  selected: string = '';

  get categories() {
    return this.blogService.categories;
  }

  get newPost() : BlogPost {
    return this.blogService.dataPost;
  }

  filterPosts(): void {
    this.blogService.changeCategory(this.selected);
  }

  newBlogPost(): void {

    this.blogService.loadDataPost(1,this.newPost);
    const dialogRef = this.dialog.open(EditDialogComponent);

  }

}
