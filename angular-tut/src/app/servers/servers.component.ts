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
  serverStatus: string = 'offline';

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
    this.isViewable = false;
  }
  getStatus = () => this.serverStatus;
  getColor = () => this.serverStatus === 'online' ? 'green' : 'red';
  callFunction = () => {
    this.isViewable = !this.isViewable;
    this.serverCreated = true;
    this.serverName = this.userName;
    this.userName = '';
  }
}
