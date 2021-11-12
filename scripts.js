// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {

    let flightStatus = document.getElementById('flightStatus');
    let shuttleBackground = document.getElementById('shuttleBackground');
    let spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

    document.getElementById('takeoff').addEventListener('click', function() {
        let output = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (output) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = '10000';
        
        }
    });

    document.getElementById('landing').addEventListener('click', function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = '';
        spaceShuttleHeight.innerHTML = '0';
    });

    document.getElementById('missionAbort').addEventListener('click', function() {
        let abortOutput = window.confirm("Confirm that you want to abort the mission.");

        if (abortOutput) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = '';
            spaceShuttleHeight.innerHTML = '0';
        }
    });

    let paddingL = 0;
    let paddingR = 0;
    let paddingU = 0;
    let paddingD = 0;

    document.getElementById('left').addEventListener('click', function() {
        paddingL += 10;
        document.getElementById("rocket").style.paddingRight = `${paddingL}px`;
    });

    document.getElementById('right').addEventListener('click', function() {
        paddingR += 10;
        document.getElementById("rocket").style.paddingLeft = `${paddingR}px`;
    });

    let shuttleHeight = Number(spaceShuttleHeight.innerHTML);

    document.getElementById('up').addEventListener('click', function() {
        shuttleHeight += 10000;
        paddingU += 10;
        document.getElementById("rocket").style.paddingBottom = `${paddingU}px`;
        spaceShuttleHeight.innerHTML = `${shuttleHeight}`;
    });

    document.getElementById('down').addEventListener('click', function() {
        shuttleHeight += 10000;
        paddingD += 10;
        document.getElementById("rocket").style.paddingTop = `${paddingD}px`;
        spaceShuttleHeight.innerHTML = `${shuttleHeight}`;
    });

});