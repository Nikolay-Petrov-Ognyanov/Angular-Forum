import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "auth",
		component: AuthComponent
	},
	{
		path: "create",
		component: CreateComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
