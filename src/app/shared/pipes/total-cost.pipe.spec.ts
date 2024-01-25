
import { TotalCostPipe } from './total-cost.pipe';

describe('TotalCostPipe', () => {
  let pipe: TotalCostPipe;

  beforeEach(() => {
    pipe = new TotalCostPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform the input', () => {
    const transformedValue = pipe.transform(1,2,true,true);
    expect(transformedValue).toBe(2003);
  });
});