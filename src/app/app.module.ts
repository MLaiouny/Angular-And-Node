import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';
import { ContactComponent } from './contact/contact.component';


const Routes = [
  {
    path: '', component: PostsComponent

    //redirectTo: 'posts',
    // pathMatch: 'full'
  },
  {
    path: 'posts', component: PostsComponent
  },
  {
    path: 'contact', component: ContactComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,

    RouterModule.forRoot(Routes)
  ],
  providers: [HttpClientModule, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
