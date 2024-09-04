import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocRoutingComponent } from './poc-routing.component';

describe('PocRoutingComponent', () => {
  let component: PocRoutingComponent;
  let fixture: ComponentFixture<PocRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PocRoutingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PocRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
