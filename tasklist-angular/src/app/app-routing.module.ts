import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// onde as rotas do projeto seao adicionadas
export const routes: Routes = [
	//
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}