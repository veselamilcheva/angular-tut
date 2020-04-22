import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss', '../app.component.scss']
})
export class ServersComponent implements OnInit {

  public isViewable: boolean;
  allowNewServer = false;
  userName = '';
  serverName = '';
  serverCreated = false;
  noServer: boolean = true;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
    this.isViewable = false;
  }
  callFunction = () => {
    this.isViewable = !this.isViewable;
    this.serverCreated = true;
    this.serverName = this.userName;
    this.userName = '';
  }
}
