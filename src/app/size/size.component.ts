import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShoesService } from './../shoes.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {
  searchInput: string;
  shoes: any[];

  constructor(
    private shoesService: ShoesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getShoes();
  }

  search(searchInput) {
    this.router.navigate(['/search', searchInput]);
  }

  add(searchInput) {
    this.shoesService.addItem(searchInput);
    this.getShoes();
  }

  onRemove(id) {
    this.shoesService.removeItem(id);
    this.getShoes();
  }

  removeAll() {
    this.shoesService.removeAll();
    this.getShoes();
  }

  private getShoes() {
    const items = this.shoesService.getItems();
    this.shoesService.getShoesInfo(items).subscribe(resp => {
      this.shoes = resp;
    })
  }
}
