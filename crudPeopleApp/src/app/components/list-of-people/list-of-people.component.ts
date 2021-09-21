import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-people',
  templateUrl: './list-of-people.component.html',
  styleUrls: ['./list-of-people.component.scss']
})
export class ListOfPeopleComponent implements OnInit {
  peopleArray:any=[];

  constructor() { }

  ngOnInit(): void {
   this.peopleArray = JSON.parse( localStorage.getItem('peopleList'));
  }

}
