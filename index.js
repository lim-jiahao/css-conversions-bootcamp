const hexToRGB = (hex) => {
  let base16 = hex.slice(1);
  if (base16.length === 3) base16 = base16[0].repeat(2) + base16[1].repeat(2) + base16[2].repeat(2);

  let red = parseInt(base16.slice(0, 2), 16);
  let green = parseInt(base16.slice(2, 4), 16);
  let blue = parseInt(base16.slice(4), 16);

  return `rgb(${red}, ${green}, ${blue})`;
}

let hexCodeRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;

if (process.argv.length === 3 && hexCodeRegex.test(process.argv[2])) {
  console.log(hexToRGB(process.argv[2]));
} else {
  console.log('USAGE: node index.js <hex color code> e.g. node index.js #ffffff')
}