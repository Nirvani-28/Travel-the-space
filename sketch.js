var bg, bgImg
var canvas
var cash
var jwell
var diamonds
var ruby
var track
var diamondsGroup, cashGroup, rubyGroup, jwellGroup

function preload() {
    bgImg = loadImage("Images/newspace.jpg")
    cash = loadImage("Images/cash.png")
    jwell = loadImage("Images/jwell.png")
    ruby = loadImage("Images/ruby.png")
    diamonds = loadImage("Images/diamonds.png")
}



function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    track = createSprite(windowWidth / 2, windowHeight / 2)
    track.addImage(bgImg)
    track.scale = 2
    track.velocityY = 2

    diamondsGroup = new Group()
    cashGroup = new Group()
    jwellGroup = new Group()
    rubyGroup = new Group()
}

function draw() {



    background(0);
    track.velocityY = 2
    if (track.y >= windowHeight) {
        track.y = windowHeight / 2
    }
    spawnCash()
    spawnDiamonds()
    spawnRuby()
    spawnJwell()

    drawSprites();
    console.log(track.y)
}

function spawnCash() {
    if (World.frameCount % 166 === 0) {
        var cashObj = createSprite(random(10, windowWidth / 2 + 200), (40, 10, 10))
        cashGroup.add(cashObj)
        cashObj.addImage(cash)
        cashObj.velocityY = 3;
        cashObj.scale = 0.3
    }
}

function spawnDiamonds() {
    if (World.frameCount % 100 === 0) {
        var diamondsObj = createSprite(random(10, windowWidth / 2 + 200), (40, 10, 10))
        diamondsGroup.add(diamondsObj)
        diamondsObj.addImage(diamonds)
        diamondsObj.velocityY = 7;
        diamondsObj.scale = 0.07
    }
}

function spawnRuby() {
    if (World.frameCount % 257 === 0) {
        var rubyObj = createSprite(random(10, windowWidth / 2 + 200), (40, 10, 10))
        rubyGroup.add(rubyObj)
        rubyObj.addImage(ruby)
        rubyObj.velocityY = 5;
        rubyObj.scale = 0.09
    }
}

function spawnJwell() {
    if (World.frameCount % 359 === 0) {
        var jwellObj = createSprite(random(10, windowWidth / 2 + 200), (40, 10, 10))
        jwellGroup.add(jwellObj)
        jwellObj.addImage(jwell)
        jwellObj.velocityY = 4;
        jwellObj.scale = 0.07
    }
}