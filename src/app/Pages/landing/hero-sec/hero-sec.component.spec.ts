import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSecComponent } from './hero-sec.component';

describe('HeroSecComponent', () => {
  let component: HeroSecComponent;
  let fixture: ComponentFixture<HeroSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
