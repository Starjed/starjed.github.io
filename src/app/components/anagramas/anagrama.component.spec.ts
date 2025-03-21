import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCardComponent } from './anagrama.component';

describe('WordCardComponent', () => {
  let component: WordCardComponent;
  let fixture: ComponentFixture<WordCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
