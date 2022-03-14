import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor(
    private http: HttpClient,
  ) { }

  getItems() {
    let items = JSON.parse(localStorage.getItem('items'));
    items = items ? items : [];
    return items;
  }

  addItem(id) {
    const items = this.getItems();
    if (items.find(item => item === id)) {
      alert('이미 등록되어 있습니다.')
    } else {
      localStorage.setItem('items', JSON.stringify([...items, id]));
    }
  }

  removeItem(id) {
    let items = this.getItems() as any[];
    if (items.length === 1) {
      localStorage.setItem('items', JSON.stringify([]))
    } else {
      localStorage.removeItem('items');
      items = items.filter(item => item !== id)
      localStorage.setItem('items', JSON.stringify(items))
    }
  }

  removeAll() {
    localStorage.removeItem('items');
  }

  getShoeInfo(prdNo: number) {
    return this.http.get(`http://abcmart.a-rt.com/product/info?prdtNo=${prdNo}`).pipe(
      map(response => this.mapData(response))
    )
  }

  private mapData(response) {
    const data = JSON.parse(response['contents']);
    if (data) return {
      status: true,
      data: data
    };
    else return {
      status: false,
      data: response['status']['url'].split("prdtNo=")[1]
    }
  }

  getShoesInfo(prdNoList: number[]) {
    const requests: Observable<any>[] = [];
    prdNoList.map(prdNo => {
      return requests.push(this.http.get(`http://abcmart.a-rt.com/product/info?prdtNo=${prdNo}`).pipe(
        map(response => this.mapData(response))
      ))
    });
    if (requests.length === 0) return of([]);
    return forkJoin(requests);
  }
}
