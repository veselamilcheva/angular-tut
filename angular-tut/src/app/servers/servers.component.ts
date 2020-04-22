import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss', '../app.component.scss']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  userName = '';
  serverName = '';
  serverCreated = false;
  noServer: boolean = true;
  serverStatus: string = 'offline';
  servers = ['Test1', 'Test2'];

  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  getStatus = () => this.serverStatus;

  getColor = () => this.serverStatus === 'online' ? 'green' : 'red';

  addServers = () => {
    this.serverCreated = true;
    this.serverName = this.userName;
    this.servers.push(this.serverName);
    this.userName = '';
    setTimeout(() => {
      this.serverCreated = false;
    },2000);
  }
}
