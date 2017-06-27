var cards = [ 
    'ace_of_spades', 'ace_of_clubs', 'ace_of_hearts', 'ace_of_diamonds',
    
    'king_of_spades', 'king_of_clubs', 'king_of_hearts', 'king_of_diamonds',
    
    'queen_of_spades', 'queen_of_clubs', 'queen_of_hearts', 'queen_of_diamonds',
    
    'jack_of_spades', 'jack_of_clubs', 'jack_of_hearts', 'jack_of_diamonds',
    
    '10_of_spades', '10_of_clubs', '10_of_hearts', '10_of_diamonds',
    
    '9_of_spades', '9_of_clubs', '9_of_hearts', '9_of_diamonds',
    
    '8_of_spades', '8_of_clubs', '8_of_hearts', '8_of_diamonds',
    
    '7_of_spades', '7_of_clubs', '7_of_hearts', '7_of_diamonds',
    
    '6_of_spades', '6_of_clubs', '6_of_hearts', '6_of_diamonds',

    '5_of_spades', '5_of_clubs', '5_of_hearts', '5_of_diamonds',

    '4_of_spades', '4_of_clubs', '4_of_hearts', '4_of_diamonds',

    '3_of_spades', '3_of_clubs', '3_of_hearts', '3_of_diamonds',

    '2_of_spades', '2_of_clubs', '2_of_hearts', '2_of_diamonds',
    ] 

function shuffle(deck) {
    for (let i = cards.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [cards[i - 1], cards[j]] = [cards[j], cards[i - 1]];
    }
    return deck
}


function createGame(nameList) {
    var Game = {
    players: [ ],
    pot: 0,
    deck: shuffle(cards),
}

nameList.forEach(function (name) {
    var player = newPlayer(name);
    Game.players.push(player); 
}

function newPlayer() {
     var user = {
        name: userName,
        firstCard: "",
        secondCard: "",
        chips: 50,
        bet: 0,
     }
}

function showGameObject(){
    var element = document.getElementById('result')
    element.innerHTML = JSON.stringify(Game,undefined,2)
}
showGameObject()


function dealCard(deck){
    return deck.shift()
}

function flop (deck) {
    var card1 = dealCard(deck)
    var el = document.getElementById("card1")
    el.setAttribute("src", `images/${card1}.png`)
    
    var card2 = dealCard(deck)
    var el = document.getElementById("card2")
    el.setAttribute("src", `images/${card2}.png`)
    
    var card3 = dealCard(deck)
    var el = document.getElementById("card3")
    el.setAttribute("src", `images/${card3}.png`)
}
function river(deck) {
    var card4 = dealCard(deck)
    var el = document.getElementById('card4')
    el.setAttribute('src', 'images/' + card4 +'.png') 
}
function turn(deck) {
    var card5 = dealCard(deck)
    var el = document.getElementById('card5')
    el.setAttribute('src', 'images/' + card5 +'.png') 
}
