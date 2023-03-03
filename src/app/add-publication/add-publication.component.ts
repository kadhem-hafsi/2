import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publication } from '../entity/publication';
import { PublicationService } from '../services/publication.service';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {

  publication:Publication=new Publication()

  constructor(private router:Router,private PubService:PublicationService) { }

  ngOnInit(): void {
  }

  ajouterPub(){
    this.PubService.addPub(this.publication).subscribe({
      next:(data)=>this.router.navigateByUrl("/home"),
      error:(error)=>console.log(error),
      complete:()=>console.log("pup added")
    })
  }
}
