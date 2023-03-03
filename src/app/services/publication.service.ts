import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publication } from '../entity/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/publication"

  getPub(){
  return this.http.get<Publication[]>(this.url)
  }

  addPub(publication:Publication){
    return this.http.post(this.url,publication)
  }

  edit(publication:Publication){
    return this.http.put(this.url+"/"+publication.id,publication)
  }
  
  getServiceById(id:number){
    return this.http.get<Publication>(this.url+"/"+id)
  }
}
