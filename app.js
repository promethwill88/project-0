$(document).on("ready", function() {

// Sanity Check
console.log("Sanity Check: js file linked");

let playerName = $('input').val();


// Build fade in css animation on game start

// Build form to take in name and pass onto scenarios
// Display backstory with start button page to load game

	let theVoid = [
	            {
	                "desc": "Master Caution light flashing. You're disoriented",
	                "loc": 0,
	                "type": "choice",
	                "choices": [
	                    {
	                        "desc": "Turn off Master Caution",
	                        "loc": 1
	                    },
	                    {
	                        "desc": "Send a distress call",
	                        "loc": 2
	                    }
	                ]
	            },
	            {
	                "desc": "Button pressed, warning goes off",
	                "loc": 1,
	                "type": "choice",
	                "choices": [
	                    {
	                        "desc": "Send a distress call",
	                        "loc": 2
	                    },
	                    {
	                        "desc": "Perform a systems check",
	                        "loc": 3
	                    }
	                ]
	            },
	            {
	                "desc": "Distress call failed. Communication Array offline",
	                "loc": 2,
	                "type": "choice",
	                "choices": [
	                    {
	                        "desc": "Perform a full systems check",
	                        "loc": 3
	                    },
	                    {
	                        "desc": "Give up and fall back asleep",
	                        "loc": 4
	                    }
	                ]
	            },
	            {
	                "desc": "You perform a systems check...Communication: Offline....Life Support: Online...Defensive Turret: Online...Propulsion: Offline. Suddenly, proximity alarm sounds. You see a strange alien craft approach",
	                "loc": 3,
	                "type": "choice",
	                "choices": [
	                    {
	                        "desc": "Bring backup power online and ping the alien craft",
	                        "loc": 6
	                    },
	                    {
	                        "desc": "Target alien craft and fire Defensive Turret",
	                        "loc": 5
	                    }
	                ]
	            },
	            {
	                "desc": "Its so comfortable...you fall asleep. The ship drifts off into deep space...",
	                "loc": 4,
	                "type": "choice",
	                "choices": [
	                    {
	                        "desc": "Try again?",
	                        "loc": 0
	                    }
	                ]
	            },
	            {
	                "desc": "Turret fires, you hit the alien craft but doing only minor damage. The ship fires back severly damaging your ship. Structural integrity compromised...your ship explodes with a brilliant flash",
	                "loc": 5,
	                "type": "choice",
	                "choices": [
	                    {
	                        "desc": "Try again?",
	                        "loc": 0
	                    }
	                ]
	            },
	            {
	                "desc": "Communication: Online. Ping sent, you wait a few minutes with no response. Then suddenly, a transmission...Unknown spacecraft, power down immediately and surrender. You are trespassing in Zamdoid space",
	                "loc": 6,
	                "type": "choice",
	                "choices": [
	                    {
	                        "desc": "You message response: ship damaged, require assistance",
	                        "loc": 7
	                    },
	                     {
	                        "desc": "You remain radio silent",
	                        "loc": 8
	                    }
	                ]
	            },
	            {
	                "desc": "Alien craft: Surrender and prepared to be boarded",
	                "loc": 7,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": "Never give up, never surrender. You put the ship into lockdown mode",
	                        "loc": 8
	                    },
	                     {
	                        "desc": "You target the ship with the Defensive Turret. The best defense is a good offense",
	                        "loc": 5
	                    }
	                ]
	            },
	            {
	                "desc": "The ship approaches. You see a boarding claw protrude from the hull. They are attempting to board",
	                "loc": 8,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": "Target alien craft and fire Defensive Turret. They'll never take you alive",
	                        "loc": 5
	                    },
	                     {
	                        "desc": "You quickly arm yourself and hide in the utility compartment",
	                        "loc": 9
	                    }
	                ]
	            },
	            {
	                "desc": "You hear loud metallic booms as the alien craft grabs your ship with its claw. The ship shakes and you hear the outer hatch open",
	                "loc": 9,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": "Take aim at the door with your blaster pistol. You fire as soon as the door opens",
	                        "loc": 11
	                    },
	                     {
	                        "desc": "Barricade the door with supply crates. Hide",
	                        "loc": 10
	                    }
	                ]
	            },
	            {
	                "desc": "You hear loud heavy thuds of footsteps getting closer. It stops in front of your compartment. The door is forced open with ease, supply crates toppling over. You see the shadowy outline of a humanoid approach closer",
	                "loc": 10,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": "Remain motionless. Hope the alien will not see you",
	                        "loc": 12
	                    },
	                     {
	                        "desc": "Fire your blaster at the alien",
	                        "loc": 11
	                    }
	                ]
	            },
	            {
	                "desc": 'You hit the alien dead on...it staggers back, "Ow! <insert player name> I told you to stop messing around to goto bed! Its way past your bedtime',
	                "loc": 11,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": '"Sorry Mom", you climb out of your pillow fort and head to bed',
	                        "loc": 14
	                    },
	                     {
	                        "desc": "5 more minutes Mom!",
	                        "loc": 15
	                    }
	                ]
	            },
	            {
	                "desc": 'You can feel the alien hovering above you and yet you still do not move. The compartment suddenly gets lifted up, "<insert player name>, I told you to stop messing around and goto bed! Its way past your bedtime',
	                "loc": 12,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": '"5 more minutes Mom!"',
	                        "loc": 15
	                    },
	                     {
	                        "desc": "No, Mom. You're not the boss of me!",
	                        "loc": 13
	                    }
	                ]
	            },
	            {
	                "desc": "You are grounded for the next week",
	                "loc": 13,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": "Well, that sucks. Play again?",
	                        "loc": 0
	                    }
	                ]
	            },
	            {
	                "desc": "You drift off to sleep in your warm bed dreaming of your next space adventure",
	                "loc": 14,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": "You Win! Play again?",
	                        "loc": 0
	                    }
	                ]
	            },
	            {
	                "desc": "You get 5 more minutes in your pillow fort, and head to bed dreaming of your next space adventure",
	                "loc": 15,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": "You Win! Play again?",
	                        "loc": 0
	                    }
	                ]
	            }

	];

	        function add_choice(desc, loc) {
	            $("#choices").append("<a class='waves-effect waves-light btn'>" + "<button class=choice data-loc=" + loc + ">" + desc + "</button>" + "</a>");
	        }	

	        function set_page_desc(desc) {
	            $("#scenario").append("<h6>" + desc + "</h6>");
	        }

	        function clear_page() {
	            $("#scenario").empty();
	            $("#choices").empty();
	        }
	        function load_page(id) {
	            // Fetch JSON for page data associated with given ID
	            let page_data = theVoid[id];

	            clear_page();
	            set_page_desc(page_data.desc);
	            if (page_data.type === 'choice') {
	                for (let choice in page_data.choices) {
	                    let choice_data = page_data.choices[choice];
	                    add_choice(choice_data.desc, choice_data.loc);
	                }
	            }
	        }


	        let current_page = 0;
	            load_page(0);
	            $('#choices').on('click', '.choice', function () {
	                let loc = $(this).data('loc');
	                load_page(loc);
	            });
});



