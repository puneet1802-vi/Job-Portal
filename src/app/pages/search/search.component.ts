import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  imports:[IonicModule , FormsModule]
})
export class SearchComponent  implements OnInit {
  searchQuery: string = '';
  filters: string[] = ['Fulltime', 'London', 'Remote Working', 'Hourly'];

  jobs = [
    {
      company: 'Darkseer Studios',
      title: 'Senior Software Engineer',
      salary: '$500 - $1,000',
      location: 'Medan, Indonesia',
      logo: 'assets/darkseer.png',
    },
    {
      company: 'Lunar Djaja Corp.',
      title: 'Database Engineer',
      salary: '$500 - $1,000',
      location: 'London, United Kingdom',
      logo: 'assets/lunar.png',
    },
    {
      company: 'Highspeed Studios',
      title: 'Junior Software Engineer',
      salary: '$500 - $1,000',
      location: 'Jakarta, Indonesia',
      logo: 'assets/highspeed.png',
    },
  ];

  
  constructor() { }

  ngOnInit() {}

  removeFilter(filter: string) {
    this.filters = this.filters.filter(f => f !== filter);
  }
}
