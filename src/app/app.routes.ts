import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/main/main.component').then(mod => mod.MainComponent)},
    { path: 'users', loadComponent: () => import('./components/users-table/users-table.component').then(mod => mod.UsersTableComponent)},
    { path: 'posts', loadComponent: () => import('./components/posts-table/posts-table.component').then(mod => mod.PostsTableComponent)},
    { path: 'users/posts/:userId', loadComponent: () => import('./components/user-posts/user-posts.component').then(mod => mod.UserPostsComponent)}
];
