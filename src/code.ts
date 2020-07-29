
const chroma  = require('chroma-js')
console.log(chroma('red'))    

const frame = figma.createFrame()
frame.name = "Contrast Grid"


const promRobotoReg = figma.loadFontAsync({family: "Roboto", style: "Regular"})
let promises = [promRobotoReg]
Promise.all(promises).then(() => {

  doGrid()
})
const nodes: SceneNode[] = [];
function doGrid(){

  //Make a new frame


  const colorStyles = figma.getLocalPaintStyles();
  
  const paints = colorStyles.filter(style => {return Boolean(style.paints[0]);})
  //console.log(paints)


  let passes = []
  

for (let i = 0; i < paints.length; i++){
for (let j =0; j < paints.length - i; j++){

  if(j !== i){

  let ri = paints[i].paints[0].color.r;
  let gi = paints[i].paints[0].color.g;
  let bi = paints[i].paints[0].color.b;

  let rj = paints[j].paints[0].color.r;
  let gj = paints[j].paints[0].color.g;
  let bj = paints[j].paints[0].color.b;

  let hexi = makeHex(ri,gi,bi);
  let hexj = makeHex(rj,gj,bj)



  let contrast = chroma.contrast(hexi,hexj)

  if(contrast > 3){

  passes.push({hexi,hexj})

makeContrastSquare(0,(passes.length-1) * 120,contrast,hexi,ri,gi,bi,rj,gj,bj)
makeContrastSquare(200,(passes.length-1) * 120,contrast,hexj,rj,gj,bj,ri,gi,bi)

  

  }
  else{
    
  }
}
}
}
frame.resize(440,(passes.length * 120) + 20)

figma.currentPage.selection = nodes;
figma.viewport.scrollAndZoomIntoView(nodes);

// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
figma.closePlugin('Grid Made!');

}


function makeHex(r,g,b) {   
	let red = rgbToHex(Math.round(255 * r));
	let green = rgbToHex(Math.round(255 * g));
	let blue = rgbToHex(Math.round(255 * b));
	return '#'+red+green+blue;
}

function rgbToHex(int) {
	var hex = Number(int).toString(16);
	if (hex.length < 2) {
			 hex = "0" + hex;
	}
	return hex;
}

function makeContrastSquare(x,y,contrast,fhex,fr,fg,fb,br,bg,bb){



  const rect = figma.createRectangle();
  rect.x = x+ 0
  rect.y = y
  rect.resizeWithoutConstraints(200,100)

  const textHexCode = figma.createText()
  textHexCode.characters = fhex.toUpperCase()
  //text.characters = `C: ${contrast}`

  textHexCode.x = x + 8
  textHexCode.y = y + 8
  textHexCode.fills = [{type: 'SOLID', color: {r: fr, g: fg, b: fb}}]
  textHexCode.fontSize = 14

  const textContrast = figma.createText()
  textContrast.characters = `${contrast.toFixed(2)}:1` 
  textContrast.x = x + 8
  textContrast.y = y + 30
  textContrast.fills = [{type: 'SOLID', color: {r: fr, g: fg, b: fb}}]
  textContrast.fontSize = 12

  const textInfo = figma.createText()
  textInfo.x = x+8
  textInfo.y = y + 48
  textInfo.fills = [{type: 'SOLID', color: {r: fr, g: fg, b: fb}}]
  textInfo.fontSize = 10

  if(contrast > 3 && contrast < 4.5){
    textInfo.characters = `AA large text\nAA non-text`
  }

  if(contrast > 4.5 && contrast < 7){
    textInfo.characters = `AAA large text\nAA large text / normal text\nAA non-text`
  }

  if(contrast > 7){
    textInfo.characters = `AAA large text / normal text\nAA large text / normal text\nAA non-text`
  }

  rect.fills = [{type: 'SOLID', color: {r: br, g: bg, b: bb}}];

  frame.appendChild(rect);
  frame.appendChild(textHexCode)
  frame.appendChild(textContrast)
  frame.appendChild(textInfo)
  let myGroup = []
  myGroup.push(rect);
  myGroup.push(textHexCode)
  myGroup.push(textContrast)
  myGroup.push(textInfo)

  const grouped = figma.group(myGroup, frame, 0)
  grouped.y = y  + 20
  grouped.x = x +20
// }