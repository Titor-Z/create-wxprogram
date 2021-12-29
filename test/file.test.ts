import { createDir } from '../utils/file';

test('create dir a/b/c', () => {
  createDir('./a/b/c/d/').then((data) => {
    expect(data).toBe(true);
  });
});
