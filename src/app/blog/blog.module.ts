import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';

import { BlogService } from './services/blog.service';
import { PostsGridComponent } from './posts-grid/posts-grid.component';
import { FilterComponent } from './filter/filter.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [
    PostsGridComponent,
    FilterComponent,
    MainPageComponent,
    EditDialogComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatDialogModule
  ],
  providers: [
    BlogService
  ]
})
export class BlogModule {}