import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public selectedProviders = [];
  public unselectedProviders = [
    {
      id: '1',
      name: 'John',
      address: '123 Greenway Blvd',
      phone: '8991234321'
    },
    {
      id: '2',
      name: 'Mary',
      address: '443 Windwhisper Road',
      phone: '2233211903'
    },
    {
      id: '3',
      name: 'Jason',
      address: '9992 Pumpkin Hollow',
      phone: '4343219384'
    }
  ];

  constructor() {}

  ngOnInit() {
    if(localStorage.getItem('savedProviders')) {
      this.selectedProviders = JSON.parse(localStorage.getItem('savedProviders'));
      this.unselectedProviders = JSON.parse(localStorage.getItem('unsavedProviders'));
    }
  }

  updateProvider(el, oldArray, newArray, type) {
    let selectedArray = newArray;
    let unselectedArray = oldArray;

    if(type === 'remove') {
      selectedArray = oldArray;
      unselectedArray = newArray;
    }

    for(let providerId in oldArray) {
      if(oldArray[providerId].id === el) {
        newArray.push(oldArray[providerId]);
        oldArray.splice(providerId, 1);
        localStorage.setItem('savedProviders', JSON.stringify(selectedArray));
        localStorage.setItem('unsavedProviders', JSON.stringify(unselectedArray));
      }
    };
  }
}  
