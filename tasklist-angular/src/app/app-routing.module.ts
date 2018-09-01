import { NgModule, ModuleWithProviders } from '@angular/core';
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


// outro exemplo de router - app.routing.ts
// import { Routes } from '@angular/router';
// import { ComponentName } from 'component_location',

// const APP_ROUTES: Routes = [
// 	{ path: 'route_link', component: ComponentName },
// 	{ path: 'route_link', component: ComponentName },
// ];
// export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

// no modulo
// import { routing } from './app.routing';
// imports: [
// 	...
// 	routing,
// ]