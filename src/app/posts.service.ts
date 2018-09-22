import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/toPromise';




@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get('/routes/posts').pipe(map((posts) => {
      return posts;
    }));

    // return this.http.get('/posts');
  }
}
