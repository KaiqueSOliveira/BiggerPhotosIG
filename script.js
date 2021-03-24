//// Super Gambiarra para aumentar o tamanho das fotos no IG.
var c = 0
const interval = setInterval(() => {
  const altura = document.querySelector(".PdwC2")
  const border_top = document.querySelector(".zZYga")
  const div = document.querySelector(".M9sTE")
  const back = document.querySelector("._2dDPU ")
  const search = document.querySelector(".pbNvD")

  if (back) {
    c = c + 1
  } else if (~back) {
    c = 0
  }
  if (altura && div && border_top && back) {
    if (c == 3) {
      var alt_max = document.createAttribute("style")
      alt_max.value = "max-width:" + div.offsetWidth * 1.29 + "px" // Mexer aqui neste ratio
      altura.setAttributeNode(alt_max)
    }
    altura.setAttribute("width", "100%")

    var border = document.createAttribute("style")
    border.value = "display:grid"
    border_top.setAttributeNode(border)
  }
  if (search) {
    search.setAttribute(
      "style",
      "max-height:700px ; min-height:700px ; width:600px"
    )
  }
}, 1000)
