import { mkdir } from 'fs/promises';
import { join } from 'path/posix';

/**
 * 创建目录（递归）
 * @param path 目录
 * @returns Promise<boolean>
 */
export async function createDir(path: string) {
  const rexPath = join(path);

  return (await mkdir(rexPath, { recursive: true })) ? true : false;
}
