import '@testing-library/jest-dom';

import { describe, it, expect } from "vitest";
import { sum } from '../components/Body/sum';

describe("sum function", () => {

  it("should return correct sum of two positive numbers", () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });

  it("should handle negative numbers", () => {
    const result = sum(-2, -3);
    expect(result).toBe(-5);
  });

  it("should handle positive and negative numbers", () => {
    const result = sum(5, -3);
    expect(result).toBe(2);
  });

  it("should return 0 when both inputs are 0", () => {
    const result = sum(0, 0);
    expect(result).toBe(0);
  });

});

