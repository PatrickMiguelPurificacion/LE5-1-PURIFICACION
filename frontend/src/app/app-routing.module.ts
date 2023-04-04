import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { ListPostsComponent } from './list-posts/list-posts.component';

const routes: Routes = [
  {
    path: '', component: ListPostsComponent
  },
  {path:'Post/:id',component:PostDetailComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
