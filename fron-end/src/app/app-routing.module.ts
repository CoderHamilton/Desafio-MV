import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// IMPORTAÇÃO DAS PAGES DA APLICAÇÃO
import { HomeComponent } from './views/home/home.component';
import { ColaboradorCrudComponent } from './views/colaborador-crud/colaborador-crud.component';
import { ColaboradorCreateComponent } from './components/colaborador/colaborador-create/colaborador-create.component'
import { ColaboradorUpdateComponent } from './components/colaborador/colaborador-update/colaborador-update.component';
import { ColaboradorDeleteComponent } from './components/colaborador/colaborador-delete/colaborador-delete.component';

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
  },
  {
    path: "colaborador/update/:id",
    component: ColaboradorUpdateComponent
  },
  {
    path: "colaborador/delete/:id",
    component: ColaboradorDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
