import { Component } from '@angular/core';
import { BitcoinPriceIndexService } from '../bitcoin-price-index.service';

@Component({
  selector: 'app-bitcoin-price-index',
  templateUrl: './bitcoin-price-index.component.html',
  styleUrls: ['./bitcoin-price-index.component.css']
})
export class BitcoinPriceIndexComponent {
  data: any
  errMessage: string=""
  
  constructor(_service: BitcoinPriceIndexService) {
    _service.getBitcoinData().subscribe({
      next: (data) => {
        this.data = data
      },
      error: (err)=> {
        this.errMessage = err.message
      }
    })
  }
}
