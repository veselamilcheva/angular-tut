import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  public isViewable: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isViewable = false;
  }
  callFunction = () => {
    this.isViewable = !this.isViewable;
  }

}
