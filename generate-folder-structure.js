const fs = require("fs");
const path = require("path");

function generateTree(dir, level = 0) {
  const files = fs.readdirSync(dir);
  let output = "";

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const isDir = fs.statSync(fullPath).isDirectory();
    const prefix = "│   ".repeat(level) + (isDir ? "├── " : "├── ");

    output += `${prefix}${file}\n`;

    if (isDir) {
      output += generateTree(fullPath, level + 1);
    }
  });

  return output;
}

const targetDir = path.resolve("./src"); // Adjust the base directory as needed
const treeStructure = generateTree(targetDir);
const outputFile = path.resolve("./folder-structure.txt");

fs.writeFileSync(outputFile, treeStructure);
console.log(`Folder structure saved to ${outputFile}`);
