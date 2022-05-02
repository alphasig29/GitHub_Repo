import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from "rxjs";

@Injectable({providedIn: 'root'})
export class PostsService {
  error = new Subject<string>();

constructor(private http: HttpClient) {}

  createAndStorPosts(title: string, content: string) {
    const postData: Post = {title: title, content: content};
    this.http.post<{name: string }>(
      'https://ng-complete-guide-8d0e1-default-rtdb.firebaseio.com/posts.json',
      postData,
      {  // get different types of data back from the response, like headers/ stauts codes / status text /
        observe: 'response'
      }
      ).subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print','pretty');
    searchParams = searchParams.append('custom','key');

    return this.http.get<{ [key: string]: Post}>('https://ng-complete-guide-8d0e1-default-rtdb.firebaseio.com/posts.json',
    {
       headers: new HttpHeaders({'custom-header': 'Hello'}),
       params: searchParams,
       responseType: 'json'
    }
    )
    .pipe(
      map((responseData) => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key });
          }
        }
        return postsArray;
    }),
    catchError(errorRes => {
      // send to analytics server / any generic error handling task
      return throwError(errorRes);
    })
    );
  }

  // tap will do something with the response, but not disturb the response

  deletePosts(){
    return this.http.delete('https://ng-complete-guide-8d0e1-default-rtdb.firebaseio.com/posts.json',
    { // look at the events
      observe: 'events',
      responseType: 'json'  //pro.academind.com/courses/angular-the-complete-guide/lectures/13906533
    }  // pro.academind.com/courses/angular-the-complete-guide/lectures/13906536
    ).pipe(tap(event => {
      console.log(event);
      if(event.type === HttpEventType.Sent) {
        // inform ui that request been sent
      }
      if(event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }));
  }
}
