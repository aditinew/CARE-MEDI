import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';

describe('RegisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

// describe('RegisterService', () => {
//   let service: RegisterService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(RegisterService);
//   });

  it('should be created', () => {
    const service: RegisterService = TestBed.get(RegisterService);
    expect(service).toBeTruthy();
  });
});
