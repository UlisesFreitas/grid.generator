interface GridTemplate {
    width: number;
    height: number;
    depth?: number;
    x: number;
    y: number;
    gridID: number;
    gridBatchID: number;
    padding?: number;
  }

  
// Grid type to represent the array of GridTemplate objects
type Grid = GridTemplate;

/**
 * createGrid: Creates a grid of templates and returns an array of these templates.
 * @param template - Template ID to copy for each grid element.
 * @param startX - The X starting coordinate for the grid.
 * @param startY - The Y starting coordinate for the grid.
 * @param rows - Number of rows in the grid.
 * @param columns - Number of columns in the grid.
 * @param batchID - Number to identify this batch of templates.
 * @returns An array of Template objects.
 */
declare function createGrid(template: string, startX: number, startY: number, rows: number, columns: number, batchID: number): Grid;

/**
 * createGridWithPadding: Creates a grid of templates with padding and returns an array of these templates.
 * @param template - Template ID to copy for each grid element.
 * @param startX - The X starting coordinate for the grid.
 * @param startY - The Y starting coordinate for the grid.
 * @param rows - Number of rows in the grid.
 * @param columns - Number of columns in the grid.
 * @param padding - Add custom paddingg to each item in the grid.
 * @param batchID - Number to identify this batch of templates.
 * @returns An array of Template objects.
 */
declare function createGridWithPadding(template: string, startX: number, startY: number, rows: number, columns: number, padding: number, batchID: number): Grid;
