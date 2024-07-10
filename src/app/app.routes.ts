import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./components/users-table/users-table.component').then(mod => mod.UsersTableComponent)},
    { path: 'users', loadComponent: () => import('./components/users-table/users-table.component').then(mod => mod.UsersTableComponent)},
    { path: 'posts', loadComponent: () => import('./components/posts-table/posts-table.component').then(mod => mod.PostsTableComponent)},
    { path: 'users/posts/:userId', loadComponent: () => import('./components/user-posts/user-posts.component').then(mod => mod.UserPostsComponent)},
    { path: 'todos/:userId', loadComponent: () => import('./components/todo-list/todo-list.component').then(mod => mod.TodoListComponent)}
];
