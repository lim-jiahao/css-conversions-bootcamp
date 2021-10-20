const msgToUser = 'USAGE: node index.js <hex/rgb color code>\
                    \ne.g. node index.js #ffffff\
                    \ne.g. node index.js rgb(255, 255, 255)';

const hexToRGB = (hex) => {
  let base16 = hex.slice(1);
  if (base16.length === 3) base16 = base16[0].repeat(2) + base16[1].repeat(2) + base16[2].repeat(2);

  let red = parseInt(base16.slice(0, 2), 16);
  let green = parseInt(base16.slice(2, 4), 16);
  let blue = parseInt(base16.slice(4), 16);

  return `rgb(${red}, ${green}, ${blue})`;
}

const rgbToHex = (rgb) => {
  let rgbSplits = rgb.slice(4).split(',');
  let [red, green, blue] = rgbSplits.map((val) => parseInt(val, 10).toString(16));
  return `#${red}${green}${blue}`;
}

let hexCodeRegex = /^#(?:[0-9a-fA-F]{3}){1,2}$/;
let rgbCodeRegex =  /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/;

if (process.argv.length === 3) {
  if (hexCodeRegex.test(process.argv[2])) console.log(hexToRGB(process.argv[2]));
  else if (rgbCodeRegex.test(process.argv[2])) console.log(rgbToHex(process.argv[2]));
  else console.log(msgToUser)
} else {
  console.log(msgToUser)
}