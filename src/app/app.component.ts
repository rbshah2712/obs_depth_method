import { Component } from '@angular/core';
import { of,map, from, filter, concat, merge } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title1 = "Observable Methods";
  
  users = from([
    {id:1,title:'Ruchi'},
    {id:2,title:'Bhavin'}
  ]);

  employee = from([
    {id:1,name:'Ruchi'},
    {id:2,name:'Bhavin'}
  ]);

  array1 = [5,10,13,4,5,6];
  array2 = [3,'A','B','C'];

  newobser = from(this.array1);
  newobser1 = from(this.array2);

  namesObservable = this.users.pipe(
    map((obj:any) => "Mr "+obj.title)
  ).subscribe((title) => {
    console.log(`Title: ${title}`);
  });

  transformed = this.newobser.pipe(map((val) => {
    return val * 5;
  }
  ))

  filteredobs = this.transformed.pipe(filter((val) => {
    return val  >= 30
  } 
  ))

  concateobs = concat(this.newobser,this.newobser1);
  mergeobs = merge(this.newobser,this.newobser1);

 ngOnInit(){
  this.filteredobs.subscribe((val) => {
    console.log('the filtered:  '+val);
  },(error) => {
     alert(error)
  });

  this.concateobs.subscribe(x => console.log('concated array:   '+x));
  this.mergeobs.subscribe(x => console.log('merged array:   '+x));

 }

  
}
