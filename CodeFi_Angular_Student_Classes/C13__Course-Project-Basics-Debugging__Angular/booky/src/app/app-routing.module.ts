import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookshelfHomeComponent } from "./bookshelf-home/bookshelf-home.component";
import { BookDetailsComponent } from "./bookshelf/book-details/book-details.component";
import { BookshelfComponent } from "./bookshelf/bookshelf.component";
import { LibraryComponent } from "./library/library.component";

const appRoutes: Routes = [
  {path: "", redirectTo: "/bookshelf", pathMatch: "full"},
  {path: "bookshelf", component: BookshelfComponent, children: [
    {path:'', component: BookshelfHomeComponent},
    {path:':id', component: BookDetailsComponent}
    ]},
  {path: "library", component: LibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{}
