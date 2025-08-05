import { test, expect } from '../fixtures';
import listPalindromes, { getPermutations } from '@/problems/listPalindromes';

test.describe('List Palindromes', () => {
  test('should return six permutations', () => {
    expect(getPermutations('abc').sort()).toEqual(
      ['abc', 'acb', 'bca', 'bac', 'cab', 'cba'].sort(),
    );
  });

  test('should return two palindromes', () => {
    expect(listPalindromes('bbaa').sort()).toEqual(['abba', 'baab'].sort());
  });

  test('should return empty arrray', () => {
    expect(listPalindromes('abcde').sort()).toEqual([]);
  });

  test('should return one palindrome', () => {
    expect(listPalindromes('a')).toEqual(['a']);
  });

  test('should not return duplicates', () => {
    expect(listPalindromes('aa')).toEqual(['aa']);
  });

  test('should not return duplicates 2', () => {
    expect(listPalindromes('aaa')).toEqual(['aaa']);
  });

  test('should not return two palindromes with an odd character', () => {
    expect(listPalindromes('baaba').sort()).toEqual(['baaab', 'ababa'].sort());
  });

  test('should return six palindromes with permutations', () => {
    expect(listPalindromes('cbacbaa').sort()).toEqual(
      ['abcacba', 'acbabca', 'cbaaabc', 'cababac', 'bacacab', 'bcaaacb'].sort(),
    );
  });
});
