/** Problem 04 - (Delete / Store) */ 
var fileName= "pdfData.jpg"; 
//write your code here 
var fileNameSize = fileName.length;
// console.log(fileNameSize);
if (fileName[0] == '#') {
    console.log("Store");
}
else if (fileName[fileNameSize - 1] == 'f' &&
        fileName[fileNameSize - 2] == 'd' && 
        fileName[fileNameSize - 3] == 'p' &&
        fileName[fileNameSize - 4] == '.') {
    console.log("Store");
}
else if (fileName[fileNameSize - 1] == 'x' &&
        fileName[fileNameSize - 2] == 'c' && 
        fileName[fileNameSize - 3] == 'o' &&
        fileName[fileNameSize - 4] == 'd' &&
        fileName[fileNameSize - 5] == '.') {
    console.log("Store");
}
else {
    console.log("Delete");
}