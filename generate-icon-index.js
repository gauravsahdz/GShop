const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

// Path to the icons folder
const iconsDir = path.join(__dirname, 'assets/icons');

// Path to the index.ts file
const indexPath = path.join(iconsDir, 'index.ts');

// Read all the SVG files in the icons directory
const svgFiles = fs.readdirSync(iconsDir).filter((file) => file.endsWith('.svg'));

// Helper function to format the icon name
const formatIconName = (filename) => {
    // Remove file extension and split by underscore
    const nameWithoutExtension = filename.replace('.svg', '');
    const parts = nameWithoutExtension.split('_');

    // Capitalize the first letter of each part and join them
    const formattedName = parts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');

    // Append "Icon" to the formatted name
    return `${formattedName}Icon`;
};

// Generate import and export statements
const importStatements = svgFiles
    .map((file) => {
        const componentName = formatIconName(file); // Format filename to component name
        const importPath = `./${file}`;
        return `import ${componentName} from '${importPath}';`;
    })
    .join('\n');

const exportStatements = svgFiles
    .map((file) => {
        const componentName = formatIconName(file); // Format filename to component name
        return `export { ${componentName} };`;
    })
    .join('\n');

// Write the generated code to index.ts
const formattedContent = prettier.format(`${importStatements}\n\n${exportStatements}`, {
    parser: 'typescript',
});

fs.writeFileSync(indexPath, formattedContent, 'utf-8');

console.log('Icons index.ts file generated successfully!');
