import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RestProvider {
  f:String;
  t:String;

  apiUrl = "https://www.live-rates.com/api/price?key=a092a49332&rate=";
  fromUrl ="https://raw.githubusercontent.com/avtarbams/Json/master/from_currency.json";
  toUrl = "https://raw.githubusercontent.com/avtarbams/Json/master/to_currency.json";

  constructor(public http: HttpClient) {

  }


  getQuote(from,to) {
    return new Promise(resolve => {
      this.f = from;
      this.t = to;
      this.http.get(this.apiUrl+this.f+"_"+this.t).subscribe(data => {
        resolve(data);
      }, error =>{
        console.log("Uh-oh. Check your URL",error);
      });
    });
  }

  getFromCurrency() {
    return new Promise(resolve => {
      this.http.get(this.fromUrl).subscribe(data => {
        resolve(data);
      }, error =>{
        console.log("Uh-oh. Check your URL",error);
      });
    });

  }
  getToCurrency() {
    return new Promise(resolve => {
      this.http.get(this.toUrl).subscribe(data => {
        resolve(data);
      }, error =>{
        console.log("Uh-oh. Check your URL",error);
      });
    });

  }


}
