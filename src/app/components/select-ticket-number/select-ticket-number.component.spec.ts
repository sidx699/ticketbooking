import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTicketNumberComponent } from './select-ticket-number.component';

describe('SelectTicketNumberComponent', () => {
  let component: SelectTicketNumberComponent;
  let fixture: ComponentFixture<SelectTicketNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTicketNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTicketNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
