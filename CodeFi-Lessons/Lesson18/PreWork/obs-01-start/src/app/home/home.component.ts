import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // let's craate our own observable
    // this.firstObsSubscription = interval(1000).subscribe( count => {
    //     console.log(count);
    // });
    const customOIntervalObsservable = new Observable((observer)=> {
      let count = 0;
      setInterval( () => {
        observer.next(count);
        if (count === 5) { observer.complete();}
        if (count > 3) {
          observer.error(new Error('Count is greater thatn 3!'));
        }
        count++;
      }
        , 1000);
    });

    //operators - filter must be true to get to map
    //   - they can build up a chain of steps to process/transform data
    customOIntervalObsservable.pipe(filter(data => {
      return data > 0;
    }), map( (data: number) => {
      return 'Round: ' + (data + 1);
    }));

    // to get the transformed data to show in console log, replace
    // customOIntervalObsservable below (before the .subscribe) with the entire section above
    // customOIntervalObsservable.pipe(map( (data: number) => {return 'Round: ' + (data + 1); }))
    //
    // so = customOIntervalObsservable.subscribe(data
    // becomes = customOIntervalObsservable.pipe(map( (data: number) => {return 'Round: ' + (data + 1); })).subscribe(data


    // subscribe to the custom obseervable
    this.firstObsSubscription = customOIntervalObsservable.subscribe(data => {
      console.log(data);
    },
    // this is the error argument of the subscribe method
    error => {
      console.log(error);
      alert(error.message);
    },
    // this is the completion handler
    () => {console.log('Completed!');}
    );

  }

  ngOnDestroy(): void {
      this.firstObsSubscription.unsubscribe();
  }

}
