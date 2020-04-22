import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-message',
  templateUrl: './test-message.component.html',
  styleUrls: ['./test-message.component.scss']
})
export class TestMessageComponent implements OnInit {
  message: string = 'test-message works!';
  constructor() { }

  ngOnInit(): void {
    
  }

}
