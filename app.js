$(document).on("ready", function() {
// Sanity Check
console.log('app.js linked');

var theVoid = [
            {
                "desc": "You find yourself overwhelmed with homework. You must relieve yourself of stress before you can even begin to accomplish anything. What do you do?",
                "loc": 0,
                "type": "choice",
                "choices": [
                    {
                        "desc": "Attempt some math homework.",
                        "loc": 1
                    },
                    {
                        "desc": "Go for a calming night walk on the dock by the ocean.",
                        "loc": 2
                    }
                ]
            },
            {
                "desc": "The attempt to complete math homework resulted in more stress. Now what do you do?",
                "loc": 1,
                "type": "choice",
                "choices": [
                    {
                        "desc": "Go for a calming night walk on the dock by the ocean.",
                        "loc": 2
                    },
                    {
                        "desc": "Paint a picture.",
                        "loc": 3
                    }
                ]
            },
            {
                "desc": "The dock is very unstable. You must hold your balance, but you are having trouble with it. What do you do?",
                "loc": 2,
                "type": "choice",
                "choices": [
                    {
                        "desc": "Go back home and paint a picture.",
                        "loc": 3
                    },
                    {
                        "desc": "Use your inner zen energy to persevere and finish the walk on the dock.",
                        "loc": 4
                    }
                ]
            },
            {
                "desc": "You paint a beautiful of a girl and a tree. Now you feel bored. What do you do?",
                "loc": 3,
                "type": "choice",
                "choices": [
                    {
                        "desc": "Use your inner zen energy to conquer that dock.",
                        "loc": 4
                    },
                    {
                        "desc": "Go beat that metal octopus' ass that has been harassing your dog at night.",
                        "loc": 5
                    }
                ]
            },
            {
                "desc": "You made that dock your bitch. All of a sudden you feel an intense amount of adrenaline. What do you do?",
                "loc": 4,
                "type": "choice",
                "choices": [
                    {
                        "desc": "Jump in the ocean.",
                        "loc": 6
                    },
                    {
                        "desc": "Go beat that metal octopus' ass that has been harassing your dog at night.",
                        "loc": 5
                    }
                ]
            },
            {
                "desc": "That octopus is done for. Congratulations you have won!",
                "loc": 5,
                "type": "choice",
                "choices": [
                    {
                        "desc": "Play again?",
                        "loc": 0
                    }
                ]
            },
            {
                "desc": "Oh, no! When you jumped in the ocean you were eaten by a shark. Try again.",
                "loc": 6,
                "type": "choice",
                "choices": [
                    {
                        "desc": "Try again?",
                        "loc": 0
                    }
                ]
            }
        ];

        function add_choice(desc, loc) {
            $("#choices").append("<button class=choice data-loc=" + loc + ">" + desc + "</button>");
        }

        function set_page_desc(desc) {
            $("#scenario").append("<p>" + desc + "</p>");
        }

        function clear_page() {
            $("#scenario").empty();
            $("#choices").empty();
        }
        function load_page(id) {
            // Fetch JSON for page data associated with given ID
            var page_data = theVoid[id];

            clear_page();
            set_page_desc(page_data.desc);
            if (page_data.type === 'choice') {
                for (var choice in page_data.choices) {
                    var choice_data = page_data.choices[choice];
                    add_choice(choice_data.desc, choice_data.loc);
                }
            }
        }


        var current_page = 0;
            load_page(0);
            $('#choices').on('click', '.choice', function () {
                var loc = $(this).data('loc');
                load_page(loc);
            });












// Game Path

// Naming convention:
// S - Scenario
// A - Answer
// '1' - Answer level
// 'a' - Choice
// '0 or 1' - Dead or Alive
/*
let S1 = "Master Caution light flashing, you're tired...";
let A1 = [
"a. Turn off Master Caution",
"b. Drift slowly back to sleep"
];

let S1a = "Button pressed, warning goes off";
let S1b = "You have no energy, the journey through the black hole has taken its toll";
let S1b1 = [
"a. You slap yourself across the face to stay awake",
"b. Too tired, exhausted..."
];

let S1b10 = "You're dead, Game Over";

let S1fdsa = [
"a. You're so tired, have no energy. The need for sleep is strong",
"b. You're fighting hard to stay awake"
];


let A2 = [
"a. Send a distress call",
"b. Perform a systems check"
];

let S2a = "Transmission unsuccessful";

let S2b = "Comm: Offline...Propulsion: Offline...Life Support: Nominal";

// Display S1 in Scenario Box
$('#scenario').text(S1);

// Display option 1 in button
$('#option0').text(A1[0]);

// Display option 2 in button
$('#option1').text(A1[1]);


// When click on Option a (Press button to cancel)
$('#option0').on('click', (element) => {
// Display Scenario 1a - "Button pressed"
$('#scenario').text(S1a);
//Display option 1 & 2
$('#option0').text(A2[0]);
$('#option1').text(A2[1]);
})



// When click on Option b - "Drift slowly to sleep"
$('#option1').on('click', (element) => {
// Display Scenario 1b - "You drift off to sleep"
$('#scenario').text(S1b);
$('#option0').text(S1b1[0]);
$('#option1').text(S1b1[1]);

// Animate fade to black with css animate
})



// Empty choices div
function emptyOptions (){
	$('#choices').empty();
};
*/












});


