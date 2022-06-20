import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  item:Array<any>=[];
  addList(addData){
    this.item.push(addData);
    // console.log(addData)
  }
  Deleteinfo(data){
    this.item.splice(this.item.indexOf(data),1)
  }
}
