import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTAÇÃO DAS PAGES DA APLICAÇÃO
import { HomeComponent } from './views/home/home.component';
import { ColaboradorCrudComponent } from './views/colaborador-crud/colaborador-crud.component';
import { ColaboradorCreateComponent } from './components/colaborador/colaborador-create/colaborador-create.component'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "listcoffe",
    component: ColaboradorCrudComponent
  },
  {
    path: "colaborador/create",
    component: ColaboradorCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
