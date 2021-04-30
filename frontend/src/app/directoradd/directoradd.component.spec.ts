import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoraddComponent } from './directoradd.component';

describe('DirectoraddComponent', () => {
  let component: DirectoraddComponent;
  let fixture: ComponentFixture<DirectoraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoraddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
