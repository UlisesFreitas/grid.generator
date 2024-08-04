# General use of `grid.generator`
An easy way to create a grid based on a template 

## Catmods' -> Grid Generator

* No options to set up.

## How do you use `grid.generator`?

* To use it you need to add catnip from sidebar `Create grid with template`.
# ![Catnip sidebar](./data/ct.libs/grid.generator/docs/catnip-create-sidebar.jpg)
# +
# ![Catnip padding](./data/ct.libs/grid.generator/docs/catnip-create-grid-padding-sidebar-1.jpg)

# ![Catnip block](./data/ct.libs/grid.generator/docs/catnip.jpg)
# ![Catnip padding](./data/ct.libs/grid.generator/docs/catnip-padding-1.jpg)
# +
* If you prefer to pure code 
```
// Define parameters for the grid
let template = 'template1';
let startX = 100;
let startY = 50;
let rows = 5;
let columns = 5;
let batchID = 1;
let padding = 1;
// Create the grid
let gridArray = createGrid(template, startX, startY, rows, columns, batchID);

Or

let gridArray = createGridWithPadding(template, startX, startY, rows, columns, padding, batchID);

// Output the result
console.log(gridArray);
```
# ![Code ascript](./data/ct.libs/grid.generator/docs/create-grid-code.jpg)
# +

## Available methods

`createGrid(template, startX, startY, rows, columns, batchID);`
Cretes a grid of the template with the given parameters.
Returns an array of templates.

## Available properties
 
In the new added templates you can get 2 new properties `gridID` and `gridBatchID`.

* property of template: gridID: number; `Unique identifier for the template instance within the grid.`
* property of template: gridBatchID:number; `Identifier for the batch this instance belongs to.`

For emaple in a loop of templates like 
```
for(var temp of arrayOfTemplates){
  console.log('This is my ID: ' + temp.gridID + 'I am a remplate of the grid: temp.gridBatchID' );
}
```
You can access this values like `this.gridID` or `this.gridBatchID`.


A mini tutorial is available here:  and thats it...

Enjoy making grids.

By Ulises Freitas.
