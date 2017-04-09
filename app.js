$(document).on("ready", function() {

	// Sanity Check
	console.log("Sanity Check: js file linked");

	// Store player name in var
	let playerName = $('input').val();

	// JSON data
	let theVoid = [
	            {
	                "desc": "Mission Sol 177. Mars Sol Date: 72,891. Earth Date: Friday, April 9, 2049. It has been 177 days since NASA Aries 12 mission has launched from Kennedy Space Center. This is the first solo manned mission to Mars. You’ve been under a medically-induced hibernation since Mission Sol 7. Deep in your dreamless sleep, a violent jolt… You are awaken from your hibernation. Alarm klaxons sound throughout the cockpit. The flight controls are lit up like New Years Eve in Times Square. Your vision is blurry, your mind still trying to make sense of all the stimuli.  You slowly regain consciousness… ",
	                "loc": 0,
	                "type": "choice",
	                "choices": [
	                    {
	                        "desc": "Start Your Adventure",
	                        "loc": 1
	                    }
	                ]
	            },
	              {
	                "desc": "You're disoriented. You reach to turn off the Master Caution switch to stop the alarms. You begin to realize the severity of the situation. As you look out the flight deck window and see pieces of your own ship floating by.",
	                "loc": 1,
	                "type": "choice",
	                "choices": [
	                    {
	                        "desc": "Put on your flight suit",
	                        "loc": 2
	                    },
	                    {
	                        "desc": "Send a priority 1 distress call",
	                        "loc": 3
	                    }
	                ]
	            },
	            {
	                "desc": "You clumsily but quickly put on your flight suit, helmet, and personal life support system...",
	                "loc": 2,
	                "type": "choice",
	                "choices": [
	                    {
	                        "desc": "Send a priority 1 distress call",
	                        "loc": 3
	                    },
	                    {
	                        "desc": "Perform a full systems check for damage report",
	                        "loc": 4
	                    }
	                ]
	            },
	            {
	                "desc": "Console: ....DISTRESS CALL (PRIORITY 1) FAILED....COMM ARRAY OFFLINE....",
	                "loc": 3,
	                "type": "choice",
	                "choices": [
	                    {
	                        "desc": "Perform a full systems check for damage report",
	                        "loc": 4
	                    },
	                    {
	                        "desc": "You're groggy. There isn't an immediate life threatning danger, you can afford some sleep",
	                        "loc": 5
	                    }
	                ]
	            },
	            {
	                "desc": "You perform a systems check. Console: ....COMMUNICATION: OFFLINE....LIFE SUPPORT: ONLINE....DEFENSIVE SYSTEMS: ONLINE....PROPULSION: OFFLINE....ALERT ALERT: UNKNOWN CRAFT APPORACHING.... You look out the window again, and a dark angular alien spacecraft stops a few hundred meters off the starboard hull",
	                "loc": 4,
	                "type": "choice",
	                "choices": [
	                    {
	                        "desc": "Engage backup power supply to bring communications back online and ping the alien craft",
	                        "loc": 7
	                    },
	                    {
	                        "desc": "Enable defensive systems. Target alien craft and fire",
	                        "loc": 6
	                    }
	                ]
	            },
	            {
	                "desc": "Its quiet...it'll take days if not weeks until help arrives. You fall back to sleep in your pod...The ship slowly drifts off into deep space...",
	                "loc": 5,
	                "type": "choice",
	                "choices": [
	                    {
	                        "desc": "Game Over. Try again?",
	                        "loc": 0
	                    }
	                ]
	            },
	            {
	                "desc": "Weapons fired. You follow the bright fiery trails of the missiles launch. They hit with muted explosions, doing only minor damage. The alien ship fires back with luminous gleaming projectiles which severely damages your ship. Console: WARNING WARNING WARNING....STRUCTURAL INTEGRITY COMPROMISED....your ship explodes with a brilliant flash...",
	                "loc": 6,
	                "type": "choice",
	                "choices": [
	                    {
	                        "desc": "Game Over. Try again?",
	                        "loc": 0
	                    }
	                ]
	            },
	            {
	                "desc": "Console: ....BACKUP POWER REROUTED....COMMUNICATION: ONLINE. Ping sent, you wait a few minutes with no response, all the while staring intently out your flight deck window. Console: TRANSMISSION DETECTED...'POWER DOWN IMMEDIATLY AND SURRENDER.'",
	                "loc": 7,
	                "type": "choice",
	                "choices": [
	                    {
	                        "desc": "You respond: SHIP DAMAGED....REQUIRE ASSISTANCE",
	                        "loc": 8
	                    },
	                     {
	                        "desc": "You remain radio silent",
	                        "loc": 9
	                    }
	                ]
	            },
	            {
	                "desc": "ALIEN CRAFT: PREPARE TO BE BOARDED",
	                "loc": 8,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": "Never give up, never surrender. You put the ship into lockdown mode to prevent boarding",
	                        "loc": 9
	                    },
	                     {
	                        "desc": "The best defense is a good offense. You bring defensive weapons online, and fire.",
	                        "loc": 6
	                    }
	                ]
	            },
	            {
	                "desc": "The ship approaches. A terrifying boarding claw protrude from the alien craft. They are attempting to board",
	                "loc": 9,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": "They'll never take you alive. Bring defensive systems online, lock on and fire",
	                        "loc": 6
	                    },
	                     {
	                        "desc": "You grab your blaster pistol and lock yourself in the utility compartment",
	                        "loc": 10
	                    }
	                ]
	            },
	            {
	                "desc": "You hear loud metallic screeches as the alien claw grabs hold of your ship. Your entire ship shudders as you hear the outer hatch forcibly open",
	                "loc": 10,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": "Take aim at the door with your blaster pistol. You squeeze the trigger as soon as the door opens...",
	                        "loc": 12
	                    },
	                     {
	                        "desc": "Barricade the door with supply crates. Hide underneath the deck",
	                        "loc": 11
	                    }
	                ]
	            },
	            {
	                "desc": "You hear pronounced, heavy thuds of footsteps getting closer and closer... It stops in front of your compartment. The door opens, with supply crates toppling over. You see a shadowy outline of a humanoid approach closer...",
	                "loc": 11,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": "Remain motionless. Hope the alien will not see you",
	                        "loc": 13
	                    },
	                     {
	                        "desc": "Aim and fire your blaster!",
	                        "loc": 12
	                    }
	                ]
	            },
	            {
	                "desc": 'You hit the alien center mass...it staggers back, "Ow! I told you to stop messing around and goto bed! Its way past your bedtime.',
	                "loc": 12,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": '"Sorry, Mom." ...you climb out of your pillow fort and head to bed',
	                        "loc": 15
	                    },
	                     {
	                        "desc": "5 more minutes, Mom!",
	                        "loc": 16
	                    }
	                ]
	            },
	            {
	                "desc": 'You sense the alien hovering above you and yet you still do not move. The compartment suddenly gets lifted up... "I told you to stop messing around and goto bed! Its way past your bedtime.',
	                "loc": 13,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": '"5 more minutes, Mom!"',
	                        "loc": 16
	                    },
	                     {
	                        "desc": "No, Mom. You're not the boss of me!",
	                        "loc": 14
	                    }
	                ]
	            },
	            {
	                "desc": "You are grounded for the next week. No TV. No iPad",
	                "loc": 14,
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
	                "loc": 15,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": "You Win! Play again?",
	                        "loc": 0
	                    }
	                ]
	            },
	            {
	                "desc": "You get 5 more minutes in your pillow fort then head off to bed dreaming of your next space adventure",
	                "loc": 16,
	                "type": "choice",
	                "choices": [
	                   {
	                        "desc": "You Win! Play again?",
	                        "loc": 0
	                    }
	                ]
	            }

	];

	// Append choices onto page
    function add_choice(desc, loc) {
        $("#choices").append("<a class='waves-effect waves-cool btn-large'>" + "<button class=choice data-loc=" + loc + ">" + desc + "</button>" + "</a>");
    }	

    // Append scenario onto page
    function set_page_desc(desc) {
        $("#scenario").append("<h6>" + desc + "</h6>");
    }

    // Clearing page
    function clear_page() {
        $("#scenario").empty();
        $("#choices").empty();
    }

    // Fetch JSON for page data associated with given id
    function load_page(id) {
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

    // Event listener on click
    let current_page = 0;
        load_page(0);
        $('#choices').on('click', '.choice', function () {
            let loc = $(this).data('loc');
            load_page(loc);
        });
});



