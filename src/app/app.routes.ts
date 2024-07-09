import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { PostsTableComponent } from './components/posts-table/posts-table.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'users', component: UsersTableComponent},
    { path: 'posts', component: PostsTableComponent}
];
