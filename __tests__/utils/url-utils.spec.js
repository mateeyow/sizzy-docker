import {
  isUrlSameProtocol,
  getOppositeProtocol
} from '../../src/utils/url-utils';

describe('Utils', () => {
  describe('urlIsSameProtocol', () => {
    it('should return true when same', () => {
      const result = isUrlSameProtocol('https://kitze.io', 'https:');
      expect(result).toEqual(true);

      const result1 = isUrlSameProtocol('http://kitze.io', 'http:');
      expect(result1).toEqual(true);
    });

    it('should return false when different', () => {
      const result = isUrlSameProtocol('https://kitze.io', 'http:');
      expect(result).toEqual(false);

      const result1 = isUrlSameProtocol('http://kitze.io', 'https:');
      expect(result1).toEqual(false);
    });

    it('should return false when url is invalid', () => {
      const result = isUrlSameProtocol('aslkdgjalsk', 'http:');
      expect(result).toEqual(false);

      const result1 = isUrlSameProtocol('laskdgjaslkdgzzz', 'https:');
      expect(result1).toEqual(false);
    });
  });

  describe('getOppositeProtocol', () => {
    it('should return opposite http when https', () => {
      expect(getOppositeProtocol('https:')).toEqual('http:');
    });
    it('should return opposite http when https', () => {
      expect(getOppositeProtocol('http:')).toEqual('https:');
    });
    it('should return false when used with invalid value', () => {
      expect(getOppositeProtocol('asdgasdgasdgasd')).toEqual(false);
    });
  });
});
