import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RestProvider} from "../../providers/rest/rest";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  response:any;
  from_currency:any;
  to_currency:any;
  f_Currency:any;
  t_Currency:any;
  response_Always:any;


  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.showFromCurrency();
    this.showToCurrency();

  }

  convert() {
    this.showQuote();
  }

  showQuote() {
    this.restProvider.getQuote(this.f_Currency,this.t_Currency)
      .then(data => {
        this.response = data;
        console.log(this.response);
      });
  }

  showFromCurrency() {
    this.restProvider.getFromCurrency()
      .then(data => {
        this.from_currency = data;
        console.log(this.from_currency);
      });
  }

  showToCurrency() {
    this.restProvider.getToCurrency()
      .then(data => {
        this.to_currency = data;
        console.log(this.to_currency);
      });
  }
play:any;
  showWithInterval() {
    let temp = this;
    this.play = window.setInterval(function () {
      temp.restProvider.getQuote(temp.f_Currency,temp.t_Currency)
        .then(data => {
          temp.response_Always = data;
          console.log(temp.response_Always);
        });
    },2000)
  }
  stopCapture() {
    window.clearInterval(this.play);
  }

  show() {
    this.showWithInterval();
  }

}
