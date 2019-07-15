


var button1 = $(`.one`)
var button2 = $(`.two`)
var button3 = $(`.three`)
var button4 = $(`.four`)
var button5 = $(`#pic`)


var user = $(`.user`)
var name = $(`.name`)
var adj1 = ["attractive","bald","beautiful","chubby","clean","dazzling","drab","elegant","fancy","fit","flabby","glamorous","gorgeous","handsome","magnificent","muscular","plain","plump","scruffy","shapely","skinny","stocky","unkept","unsightly"]
var adj2 = ["agreeable","ambitious","brave","calm","delightful","eager","faithful","gentle","happy","jolly","kind","lively","nice","obedient","polite","proud","silly","thankful","victorious","witty","wonderful","zealous"]
var adj3 = ["angry","bewildered","clumsy","defeated", "embarrassed","fierce","grumpy","helpless", "helpless","itchy","jealous","lazy", "mysterious","nervous","obnoxious","panicky","pitiful","repulsive","scary","thoughtless","uptight","worried"]
var adj4 = ["big","colossal","fat","gigantic","great","huge","immense","large","little","mammoth","massive","microsopic","minature","petite","puny","scrawny","short","small","tall","teeny","tiny"]
var theImages = [{
   src: "https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
   width: "300",
   height: "300",
}, {
   src: "https://i.pinimg.com/236x/a4/58/20/a458205f61df3469c0f705bf1b0d9d37.jpg",
   width: "300",
   height: "300"

}, {
   src: "https://postmediamontrealgazette2.files.wordpress.com/2019/03/unknown-2.jpg?quality=80&strip=all&w=371&h=277&crop=1",
   width: "300",
   height: "300"

}, {
   src: "https://boygeniusreport.files.wordpress.com/2015/10/bear.jpg?quality=98&strip=all&w=782",
   width: "300",
   height: "300"

}, {
   src: "https://www.nycacc.org/sites/default/files/styles/max_325x325/public/2018-02/Bunny%20Updated.jpg?itok=4SVJHnkv",
   width: "300",
   height: "300"

}, {
   src: "https://support.wwf.org.uk/sites/default/files/styles/product_list_image/public/product-images/elephanthero1.jpg?h=27eb9958&itok=2m7MQQlU",
   width: "300",
   height: "300"

}, {
   src: "https://animals.sandiegozoo.org/sites/default/files/2016-08/category-thumbnail-mammals_0.jpg",
   width: "300",
   height: "300"

}, {
   src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtXMBkDIoXV_sGj50SFT7BEb-KyX_QJQNdW5GfCv6WnlSyFUa_nA",
   width: "300",
   height: "300"

}, {
   src: "https://media.npr.org/assets/img/2016/05/06/istock_000057806790_small-b040e75c14cffe5b20d56d8bcb349f320c3b3696-s800-c85.jpg",
   width: "300",
   height: "300"

}, {
   src: "https://www.rd.com/wp-content/uploads/2018/12/50-Funny-Animal-Pictures-That-You-Need-In-Your-Life-6.jpg",
   width: "300",
   height: "300"

}, {
   src: "https://ichef.bbci.co.uk/images/ic/1200x675/p03t268b.jpg",
   width: "300",
   height: "300"

}, {
   src: "https://i.imgur.com/UyIqNjN.jpg",
   width: "300",
   height: "300"

}, {
   src: "https://cdn.ebaumsworld.com/mediaFiles/picture/405644/636289.jpg",
   width: "300",
   height: "300"

}, {
   src: "https://cdn.pixabay.com/photo/2016/08/15/23/00/duckling-1596732_960_720.jpg",
   width: "300",
   height: "300"

}, {
   src: "https://cdn.pixabay.com/photo/2012/09/09/15/21/giraffe-56573_960_720.jpg",
   width: "300",
   height: "300"

}, {
   src: "http://www.cutestpaw.com/wp-content/uploads/2013/04/Cow-calf-moose1.jpg",
   width: "300",
   height: "300"

},]

var noun = ["moose","dog","buffalo","bunny","penguin","elephant","horse","zebra","giraffe","cat","bear","flamingo","panda","mouse","fox","lion","tiger","unicorn","pegasus","hyena","parrot","chicken","cow","goat","bull","pig","kangaroo","grasshopper","spider","monkey","gorilla","gazelle","snake","salamander"]

button1.on ('click', generate1)
button2.on (`click`, generate2)
button3.on (`click`, generate3)
button4.on (`click`, generate4)
button5.on(`click`,generate5)


function generate1 (){
  var randomDcml = Math.random ();
    console.log(randomDcml);
  var random = randomDcml * 24;
    console.log(random);
  var final = Math.floor (random);
    console.log(final);
    $(".user").text(adj1[final]);
  console.log(adj1[final]);

  var randomDcml = Math.random ();
    console.log(randomDcml);
  var random = randomDcml * 34;
    console.log(random);
  var final = Math.floor (random);
    console.log(final);
    $(".name").text(noun[final]);
  console.log(noun[final]);
}

function generate2 (){
  var randomDcml = Math.random ();
    console.log(randomDcml);
  var random = randomDcml * 22;
    console.log(random);
  var final = Math.floor (random);
    console.log(final);
    $(".user").text(adj2[final]);
  console.log(adj2[final]);

  var randomDcml = Math.random ();
    console.log(randomDcml);
  var random = randomDcml * 34;
    console.log(random);
  var final = Math.floor (random);
    console.log(final);
    $(".name").text(noun[final]);
  console.log(noun[final]);
}

function generate3 (){
  var randomDcml = Math.random ();
    console.log(randomDcml);
  var random = randomDcml * 21;
    console.log(random);
  var final = Math.floor (random);
    console.log(final);
    $(".user").text(adj3[final]);
  console.log(adj3[final]);

  var randomDcml = Math.random ();
    console.log(randomDcml);
  var random = randomDcml * 34;
    console.log(random);
  var final = Math.floor (random);
    console.log(final);
    $(".name").text(noun[final]);
  console.log(noun[final]);
}

function generate4 (){
  var randomDcml = Math.random ();
    console.log(randomDcml);
  var random = randomDcml * 20;
    console.log(random);
  var final = Math.floor (random);
    console.log(final);
    $(".user").text(adj4[final]);
  console.log(adj4[final]);

  var randomDcml = Math.random ();
    console.log(randomDcml);
  var random = randomDcml * 34;
    console.log(random);
  var final = Math.floor (random);
    console.log(final);
    $(".name").text(noun[final]);
  console.log(noun[final]);
}

function generate5 ()
{
  var randomDcml = Math.random ();
    console.log(randomDcml);
  var random = randomDcml * 16;
    console.log(random);
  var final = Math.floor (random);
    console.log(final);
    $(".pics").attr(theImages[final]);
  console.log(theImages[final]);
}
