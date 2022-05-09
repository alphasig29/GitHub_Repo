import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";



const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
  path: 'recipes', loadChildren: () =>
    import('./recipes/recipes.module')
    .then(m => m.RecipesModule)
  },
  {
  path: 'shopping-list', loadChildren: () =>
    import('./shopping-list/shopping-list.module')
    .then(m => m.ShoppingListModule)
  },
  {
  path: 'auth', loadChildren: () =>
    import('./auth/auth.module')
    .then(m => m.AuthModule)
  }
];

// preload lazy-loaded modules in forRoot()  https://pro.academind.com/courses/angular-the-complete-guide/lectures/13906632
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
