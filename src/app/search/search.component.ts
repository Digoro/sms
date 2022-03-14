import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoesService } from './../shoes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  shoe;
  isLoad = true;
  searchInput: number;

  constructor(
    private route: ActivatedRoute,
    private shoesService: ShoesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.searchInput = params.searchInput;
      this.shoesService.getShoeInfo(this.searchInput).subscribe(resp => {
        this.shoe = resp;
        this.isLoad = !!this.shoe;
      })
    })
  }
}
