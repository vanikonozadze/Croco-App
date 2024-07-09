import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { PostsTableComponent } from './components/posts-table/posts-table.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';

export const routes: Routes = [
    //{ path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: '', component: MainComponent },
    { path: 'users', component: UsersTableComponent},
    { path: 'posts', component: PostsTableComponent},
    { path: 'users/posts/:userId', component: UserPostsComponent }
];
