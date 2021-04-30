import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActoraddComponent } from './actoradd.component';

describe('ActoraddComponent', () => {
  let component: ActoraddComponent;
  let fixture: ComponentFixture<ActoraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActoraddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActoraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
