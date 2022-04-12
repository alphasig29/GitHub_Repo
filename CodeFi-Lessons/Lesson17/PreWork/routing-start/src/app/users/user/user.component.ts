// import { Subscription } from 'rxjs/Subscription';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

//implement OnDestroy to handle manual destruction of components
export class UserComponent implements OnInit, OnDestroy {
  user: {id: number, name: string};
  // need a reference to the Subscription function
  paramsSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params['id']);
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    this.paramsSubscription =
      this.route.params.subscribe(
        (params: Params) => {
          this.user.id = params['id]'];
          this.user.name = params['name'];
        }
      );
  }

  // this is not necessary, because Angular is handling the
  // destruction of this behind the scenes.
  ngOnDestroy(): void {
      this.paramsSubscription.unsubscribe();
  }
}
