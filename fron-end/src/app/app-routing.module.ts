import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTAÇÃO DAS PAGES DA APLICAÇÃO
import { HomeComponent } from './views/home/home.component';
import { ListcafeCrudComponent } from './views/listcafe-crud/listcafe-crud.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "listcoffe",
    component: ListcafeCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
