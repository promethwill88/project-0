$(document).on("ready", function() {
// Sanity Check
console.log('app.js linked');

// Append scenario to div
function prompt(){
	// TODO: write out scenario
	$('#scenario').append('<p>' + scenario '</p>');
}

// Game Path

// Naming convention:
// S - Scenario
// A - Answer
// '1' - Answer level
// 'a' - Choice
// '0 or 1' - Dead or Alive

let S1 = "Master Caution light flashing, you're tired...";

let A1 = [
"a. Press button to cancel",
"b. Drift slowly back to sleep"
];

let S1b = "You drift off to sleep";
// Animate fade to black with css animate

let S1b0 = "You're dead, Game Over";

let S1a = "Button pressed, warning goes off";

let A2 = [
"a. Send distress call",
"b. Do a systems check"
];

let S2a = "Transmission unsuccessful";

let S2b = "Comm: Offline...Propulsion: Offline...Life Support: Nominal";















});


