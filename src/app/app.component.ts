import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'right-modal-sample';
  displayingModal = 'none';

  constructor(){}

  ngOnInit(): void {

  }

  displayModal(): void {
    this.displayingModal = 'block';
  }

  hideModal(): void {
    this.displayingModal = 'none'
  }

  closeModalOutSite(event:any): void {
    const { id } = event.target;
    if (id === 'myModal'){
      this.hideModal();
    }
  }

}
