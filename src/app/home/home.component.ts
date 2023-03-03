import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Publication } from '../entity/publication';
import { PublicationService } from '../services/publication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
listPub :Publication[]=[]
chercher !:string;
  constructor(private router:Router,private PubService:PublicationService) { }

  ngOnInit(): void {
    this.PubService.getPub().subscribe({
      next:(data)=>{this.listPub=data},
      error:(error)=>console.log(error),
      complete:()=>console.log("pup list ")
    })
  }

  incrementer(p:Publication){
    p.like=p.like+1
    this.PubService.edit(p).subscribe({
      next:(data)=>{},
      error:(error)=>console.log(error),
      complete:()=>console.log("liked")
    })
  }

  chercherStage(){
    this.PubService.getPub().subscribe({
      next:(data)=>{this.listPub=this.listPub.filter((p)=>p.titre===this.chercher)},
      error:(error)=>console.log(error),
      complete:()=>console.log("liked")
    })
  }

  getElemt(p:Publication){
    this.PubService.getPub().subscribe({
      next:(data)=>{this.router.navigateByUrl("/detail"+"/"+p.description)},
      error:(error)=>console.log(error),
      complete:()=>console.log("pup list ")
    })
  }
}
