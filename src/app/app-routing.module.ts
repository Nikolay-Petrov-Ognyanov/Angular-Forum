import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
	{
		path: "posts",
		component: HomeComponent
	},
	{
		path: "auth",
		component: AuthComponent
	},
	{
		path: "create",
		component: CreateComponent
	},
	{
		path: "posts/:id",
		component: DetailsComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
