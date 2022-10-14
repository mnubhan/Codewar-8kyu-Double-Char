function doubleChar(str) {
  return str.split("").map(x=>x+x).join('')
}

const doubleChar = (str) => str.split("").map(c => c + c).join("")
