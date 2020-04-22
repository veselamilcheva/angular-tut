import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMessageComponent } from './test-message.component';

describe('TestMessageComponent', () => {
  let component: TestMessageComponent;
  let fixture: ComponentFixture<TestMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
