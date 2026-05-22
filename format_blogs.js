const fs = require('fs');

const path = 'src/data/blog-posts.ts';
let content = fs.readFileSync(path, 'utf-8');

// We have 18 images to use
const availableImages = [
  "/optimized/pexels-1065084.webp",
  "/optimized/pexels-1222271.webp",
  "/optimized/pexels-2219024.webp",
  "/optimized/pexels-4421110.webp",
  "/optimized/pexels-4421160.webp",
  "/optimized/pexels-443383.webp",
  "/optimized/pexels-5445424.webp",
  "/optimized/pexels-5445425.webp",
  "/optimized/pexels-545012.webp",
  "/optimized/pexels-5691624.webp",
  "/optimized/pexels-5691629.webp",
  "/optimized/pexels-5691630.webp",
  "/optimized/pexels-5691631.webp",
  "/optimized/pexels-5691632.webp",
  "/optimized/pexels-5691638.webp",
  "/optimized/pexels-5691657.webp",
  "/optimized/pexels-733872.webp",
  "/optimized/pexels-91227.webp"
];

let imgIndex = 0;
function getRandomImage() {
  const img = availableImages[imgIndex];
  imgIndex = (imgIndex + 1) % availableImages.length;
  return img;
}

// Simple parser to find paragraph contents
// We look for: type: "paragraph",\n        content: "TEXT"
const paragraphRegex = /type:\s*['"]paragraph['"],\s*content:\s*['"]([^'"]+)['"]/g;

// To support multiline matches better and not mess up strings with escaped quotes,
// we'll actually parse the file manually or use a more precise regex.

// Let's do it section by section.
// Split the file into lines.
const lines = content.split('\n');
let newLines = [];
let i = 0;

while (i < lines.length) {
  let line = lines[i];
  
  if (line.includes('type: "paragraph"') || line.includes("type: 'paragraph'")) {
    let typeLine = line;
    let contentLineIndex = i + 1;
    let contentLine = lines[contentLineIndex];
    
    if (contentLine && contentLine.includes('content: "')) {
      // Extract the content
      let contentMatch = contentLine.match(/content:\s*"([^"]+)"/);
      if (contentMatch) {
        let text = contentMatch[1];
        
        // Split the text into multiple paragraphs if it has multiple sentences and is long
        let sentences = text.match(/[^\.!\?]+[\.!\?]+["']?|.+/g) || [text];
        
        if (sentences.length > 2) {
           let chunks = [];
           let currentChunk = "";
           
           for (let sentence of sentences) {
             currentChunk += sentence.trim() + " ";
             if (currentChunk.length > 250) {
               chunks.push(currentChunk.trim());
               currentChunk = "";
             }
           }
           if (currentChunk.trim().length > 0) {
             chunks.push(currentChunk.trim());
           }
           
           // If we successfully split it into multiple chunks
           if (chunks.length > 1) {
             // Create new sections
             // Don't push the original typeLine and contentLine
             for (let j = 0; j < chunks.length; j++) {
               let chunk = chunks[j];
               // Indentation matching the original
               let indent = typeLine.match(/^\s*/)[0];
               let objectIndent = indent.substring(0, indent.length - 2) || "      ";
               
               if (j > 0) {
                 newLines.push(objectIndent + "{");
                 newLines.push(indent + 'type: "paragraph",');
                 newLines.push(indent + 'content: "' + chunk + '"');
                 newLines.push(objectIndent + "},");
               } else {
                 newLines.push(typeLine);
                 newLines.push(indent + 'content: "' + chunk + '"');
                 newLines.push(objectIndent + "},");
               }
             }
             
             // Optionally insert an image after splitting paragraphs
             if (Math.random() > 0.6) {
                let indent = typeLine.match(/^\s*/)[0];
                let objectIndent = indent.substring(0, indent.length - 2) || "      ";
                newLines.push(objectIndent + "{");
                newLines.push(indent + 'type: "image",');
                newLines.push(indent + `title: "AC Repair Image",`);
                newLines.push(indent + `content: "${getRandomImage()}"`);
                newLines.push(objectIndent + "},");
             }
             
             i += 2; // skip original typeLine and contentLine
             continue;
           }
        }
      }
    }
  }
  
  // Randomly add an image after a heading
  if (line.includes('type: "heading"') || line.includes("type: 'heading'")) {
    newLines.push(line);
    // Keep reading until the end of this heading object '}'
    let j = i + 1;
    while(j < lines.length) {
      newLines.push(lines[j]);
      if (lines[j].trim() === '},' || lines[j].trim() === '}') {
         // Insert an image occasionally after a heading
         if (Math.random() > 0.7) {
            let indent = lines[j].match(/^\s*/)[0];
            newLines.push(indent + "{");
            newLines.push(indent + '  type: "image",');
            newLines.push(indent + '  title: "Service Overview",');
            newLines.push(indent + `  content: "${getRandomImage()}"`);
            newLines.push(indent + "},");
         }
         i = j;
         break;
      }
      j++;
    }
    i++;
    continue;
  }
  
  newLines.push(line);
  i++;
}

// Fix trailing commas if any were messed up, but the logic above should be mostly safe if we assume every section has a trailing comma except the last.
let finalContent = newLines.join('\n');
// Quick fix for potential double commas or syntax issues: 
finalContent = finalContent.replace(/},\n\s*},\n/g, '},\n');

fs.writeFileSync(path, finalContent, 'utf-8');
console.log("Formatting complete.");
