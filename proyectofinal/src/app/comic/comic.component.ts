import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComicService } from '../service/comic.service';
@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {
public id:string
public comicList:any  
constructor(parametro:ActivatedRoute,public comic:ComicService) {
    this.id=parametro.snapshot.paramMap.get('id')
   }
  ngOnInit(): void {
    this.comic.getComicsId(this.id).then((res)=>{
      console.log(res)
      this.comicList=res.data.data.results
      console.log(this.comicList)
  })

  }
}

