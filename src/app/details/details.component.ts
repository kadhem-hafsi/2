import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Publication } from '../entity/publication';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  descrip :string="hhh";
  Pub !:Publication;

  constructor(private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this.descrip=this.activated.snapshot.params['description']
    console.log(this.descrip)
  }

}
