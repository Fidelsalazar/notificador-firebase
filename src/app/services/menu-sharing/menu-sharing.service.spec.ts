import { TestBed } from '@angular/core/testing';

import { MenuSharingService } from './menu-sharing.service';

describe('MenuSharingService', () => {
  let service: MenuSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
