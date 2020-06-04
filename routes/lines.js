const express = require('express')
const router = express.Router()
const linesArray = [
    "Damn, I'm no weather man, but you can expect a couple inches tonight.",
    "Hey, my name's Microsft. Can I crash at your place tonight?",
    "Did the sun come out or did you just smile at me?",
    "I'm no photographer, but I can picture us together.",
    "Feel my shirt. Know what it’s made of? Boyfriend material.",
    "If I could rearrange the alphabet, I would put U and I together.",
    "I was blinded by your beauty; I’m going to need your name and phone number for insurance purpose",
    "Can I follow you where you’re going right now? Because my parents always told me to follow my dreams.",
    "Is this the Hogwarts Express? Because it feels like you and I are headed somewhere magical.",
    "I'm not drunk, I'm just intoxicated by YOU.",
    "Are you Jewish? Cause you ISRAELI HOT.",
    "Are you a cat? Cause you are purrrfect",
    "They say Disneyland is the happiest place on earth. Well apparently, no one has ever been standing next to you.",
    "Are you religious? Because you’re the answer to all my prayers.",
    "I seem to have lost my phone number. Can I have yours?",
    "Aside from being sexy, what do you do for a living?",
    "Hi, how was heaven when you left it?",
    "My love for you is like diarrhea, I just can't hold it in.",
    "Baby, if you were words on a page, you'd be fine print.",
    "Was that an earthquake, or did you just rock my world.",
    "Do you want to go to In-and-Out for burgers or just in-and-out of me?",
    "We’re not socks, but I think we’d make a great pair.",
    "Do you have a map? I keep getting lost in your eyes.",
    "Do you like Star Wars? Because Yoda only one for me!",
    "You’re so beautiful that you made me forget my pickup line",
    "Did you invent the airplane? Because you seem Wright for me.",
    "I’m lost. Can you give me directions to your heart?",
    "There’s only one thing I want to change about you, and that’s your last name.",
    "You're so sweet, you'd put Hershey's out of business!",
    "You must be made of cheese. Because you're looking Gouda tonight!",
    "I'm glad I remembered to bring my library card. 'Cause I am totally checking you out!",
    "Kiss me if I'm wrong. But dinosaurs still exist, right?",
    "You must be a high test score. Because I want to take you home and show you to my mother.",
    "I wasn't always religious. But I am now, because you're the answer to all my prayers."
]
var lines = []
for(let i=0; i<linesArray.length; i++) {
    lines.push({
        id: i,
        line: linesArray[i]
    })
}

// Getting all pick up lines
router.get('/', (req, res) => {
    res.json(lines)
})

// Getting random pick up lines
router.get('/random', (req, res) => {
    res.json(lines[Math.floor(Math.random() * lines.length)])
})

// Getting the pick up line with id
router.get('/:id', (req, res) => {
    res.json(lines[req.params.id])
})

module.exports = router