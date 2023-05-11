import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthComponent } from './components/auth/auth.component';
import { CreateComponent } from './components/create/create.component';
import { DetailsComponent } from './components/details/details.component';
import { UpdateComponent } from './components/update/update.component';

const
	routes: Routes = [
		{
			path: "",
			component: HomeComponent
		},
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
			path: "posts/:postId",
			component: DetailsComponent
		},
		{
			path: "posts/:postId/update",
			component: UpdateComponent
		}
	];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
