import { CountTimePassedPipe } from './count-time-passed.pipe';

describe('CountTimePassedPipe', () => {
  it('create an instance', () => {
    const pipe = new CountTimePassedPipe();
    expect(pipe).toBeTruthy();
  });
});
