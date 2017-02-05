// Define spreadsheet URL.
var mySpreadsheet = 'https://docs.google.com/spreadsheet/ccc?key=0AlRp2ieP7izLdGFNOERTZW0xLVpROFc3X3FJQ2tSb2c#gid=0';

// Load top ten switch hitters.
$('#switch-hitters').sheetrock({
  url: mySpreadsheet,
  sql: "select A,B,C,D,E,L where E = 'Both' order by L desc",
  chunkSize: 10
});
