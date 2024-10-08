import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemAddComponent } from './menu-item-add.component';

describe('MenuItemAddComponent', () => {
  let component: MenuItemAddComponent;
  let fixture: ComponentFixture<MenuItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuItemAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
