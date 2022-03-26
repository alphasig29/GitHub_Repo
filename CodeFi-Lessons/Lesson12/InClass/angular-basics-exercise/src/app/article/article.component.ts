import { Component, NgModule } from "@angular/core";


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})

export class ArticleComponent  {
  isTechRelated: boolean = true;
  title: string = "Somewhere in space right now:";
  // &emsp; is 4 spaces | &ensp; is 2 spaces | &ensp; is 1 space
  content: string = "<b>Mal:</b>&emsp;Looks like we got here right in the nick of time!<br>" +
                    "&emsp;&emsp;&emsp;What does that make us?<br><br>" +
                     "<b>Zoe:</b>&emsp; Big Damn Heroes, Sir! <br><br>" +
                     "<b>Mal:</b>&emsp;  Isn't that right!";

setTextColor(){
  return this.isTechRelated===true ? "blue" : "yellow";
}

}

