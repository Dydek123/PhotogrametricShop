import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BestsellerCardsComponent} from './bestseller-cards.component';

describe('BestsellerCardsComponent', () => {
  let component: BestsellerCardsComponent;
  let fixture: ComponentFixture<BestsellerCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BestsellerCardsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BestsellerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
