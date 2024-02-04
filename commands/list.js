import fs from 'fs/promises';

export const list = async (currDir) => {
  try {
    const fileList = await fs.readdir(currDir, {withFileTypes: true});
    const filesMapped = fileList.map(file => ({name: file.name, type: file.isDirectory() ? 'directory' : 'file'}));

    const directories = filesMapped.filter(item => item.type === 'directory');
    const files = filesMapped.filter(item => item.type === 'file');

    directories.sort((a, b) => b.name - a.name);
    files.sort((a, b) => b.name - a.name);

    const sortedList = directories.concat(files);
    console.table(sortedList);
  } catch {
    console.log('Operation failed');
  }
}