import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PolitiquesPage } from './politiques.page';

describe('PolitiquesPage', () => {
  let component: PolitiquesPage;
  let fixture: ComponentFixture<PolitiquesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PolitiquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
