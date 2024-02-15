import { Component } from '@angular/core';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastr: ToastrService) {
    toastr.error('Merhaba', 'Gençay');
  }
}

$.get('https://localhost:7160/api/product', (data) => {
  console.log(data);
});
