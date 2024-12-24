import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPartsComponent } from './portfolio-parts.component';

describe('PortfolioPartsComponent', () => {
  let component: PortfolioPartsComponent;
  let fixture: ComponentFixture<PortfolioPartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPartsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
