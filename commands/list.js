import fs from 'fs/promises';

export const list = async (currDir) => {
  const fileList = await fs.readdir(currDir, {withFileTypes: true});
  const filesMapped = fileList.map(file => ({name: file.name, type: file.isDirectory() ? 'directory' : 'file'}));

  const directories = filesMapped.filter(item => item.type === 'directory');
  const files = filesMapped.filter(item => item.type === 'file');

  const sortedDirectories = directories.sort((a,b) => b.name - a.name);
  const sortedFiles = files.sort((a,b) => b.name - a.name);

  const sortedList = sortedDirectories.concat(sortedFiles);
  console.table(sortedList);
}