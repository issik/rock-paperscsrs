function userClickRock() {
    document.getElementById('user-choice').src = "imgs/rock.png"}

function userClickPaper() {
    document.getElementById('user-choice').src = "imgs/book.png"}

function userClickScsrs(){
    document.getElementById('user-choice').src = "imgs/scsrs.png"}

var i = ["imgs/scsrs.png", "imgs/rock.png", "imgs/book.png" ]

function pcChoice(){
  var num = Math.floor(Math.random() * 3) + 1
  var imgstring = i[num]
  document.getElementById('pcChoice').src = i
}
