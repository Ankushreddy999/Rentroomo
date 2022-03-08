import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedpropertiesComponent } from './featuredproperties.component';

describe('FeaturedpropertiesComponent', () => {
  let component: FeaturedpropertiesComponent;
  let fixture: ComponentFixture<FeaturedpropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedpropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedpropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
