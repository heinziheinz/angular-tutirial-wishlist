import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssWishFormComponent } from './ass-wish-form.component';

describe('AssWishFormComponent', () => {
  let component: AssWishFormComponent;
  let fixture: ComponentFixture<AssWishFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssWishFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssWishFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
