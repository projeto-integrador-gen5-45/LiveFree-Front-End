import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path:'', redirectTo: 'menu', pathMatch: 'full'},
  {path:'sobre', component: SobreComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'rodape', component: RodapeComponent},
  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
