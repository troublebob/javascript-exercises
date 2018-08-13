const ftoc = function(t) {
  t-=32
  return Math.round(t * 5/9 * 10)/10
}

const ctof = function(t) {
  t*=1.8
  return Math.round((t+=32 )* 10)/10
}

module.exports = {
  ftoc,
  ctof
}
