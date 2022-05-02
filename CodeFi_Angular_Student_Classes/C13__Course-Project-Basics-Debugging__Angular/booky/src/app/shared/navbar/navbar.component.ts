import { Component} from '@angular/core';
import { HTTPServivce } from '../http/http.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
 show = false;

constructor(private httpService: HTTPServivce){}

onSaveData(){
  this.httpService.saveBooksToFirebase();
}

onFetchData(){
  this.httpService.fetchBooksFromFirebase();
}
}
