import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsJobComponent } from './tags-job.component';

describe('TagsJobComponent', () => {
  let component: TagsJobComponent;
  let fixture: ComponentFixture<TagsJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
