let gridTemplates = [];

function createGrid(template, startX, startY, rows, columns, batchID) {
  let currentID = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
        var ntemplate = templates.copy(template,0,0);
        ntemplate.depth = 0;
        ntemplate.x = startX + col *  ntemplate.width;
        ntemplate.y = startY + row * ntemplate.height;
        ntemplate.gridID = currentID;
        ntemplate.gridBatchID = batchID;
        gridTemplates.push(ntemplate);
        currentID++;
    }
  }
  return gridTemplates;
}

function createGridWithPadding(template, startX, startY, rows, columns, padding,  batchID) {
  let currentID = 0;
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
        var ntemplate = templates.copy(template,0,0);
        ntemplate.depth = 0;
        // Adjust x and y positions to account for padding
        ntemplate.x = startX + col * (ntemplate.width + padding * 2) + padding;
        ntemplate.y = startY + row * (ntemplate.height + padding * 2) + padding;
        ntemplate.gridID = currentID;
        ntemplate.gridBatchID = batchID;
        gridTemplates.push(ntemplate);
        currentID++;
    }
  }
  return gridTemplates;
}