/* ==========================================================================
   Analogue clock
   ========================================================================== */

(function () {
        
    function initLocalClocks() {

        // Get the local time using JS
        var date = new Date,
        seconds = date.getSeconds(),
        minutes = date.getMinutes(),
        hours = date.getHours();

        // Create an object with each hand and it's angle in degrees
        var hands = [
        {
            hand: 'js-hour',
            angle: (hours * 30) + (minutes / 2)
        },
        {
            hand: 'js-minute',
            angle: (minutes * 6)
        },
        {
            hand: 'js-second',
            angle: (seconds * 6)
        }
        ];

        // Loop through each of these hands to set their angle
        for (var j = 0; j < hands.length; j++) {
            
            // Get the class of the hands 
            var elements = document.querySelectorAll('.' + hands[j].hand);
            for (var k = 0; k < elements.length; k++) {
                
                // Set the rotation on the element itself in HTML
                elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
                elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
                
                // If this is a minute hand, note the seconds position (to calculate minute position later)
                // to work out when to move the minute hand
                if (hands[j].hand === 'js-minute') {
                    elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
                }
            }
        }
    }
    initLocalClocks();

    // Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
    function setUpMinuteHand() {
       
        var containers = document.querySelectorAll('.js-minuteContainer'),
            secondAngle = containers[0].getAttribute('data-second-angle');
        
        // Find out how far into the minute we are
        if (secondAngle > 0) {

            // Set a timeout until the end of the current minute, to move the hand
            var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
            setTimeout(function() {
                moveMinuteHand(containers);
            }, delay);
        }
    }
    setUpMinuteHand();
    
    // Do the first minute's rotation
    function moveMinuteHand(containers) {
        
        // Loop trough the hands' containers
        for (var i = 0; i < containers.length; i++) {
            containers[i].style.webkitTransform = 'rotateZ(6deg)';
            containers[i].style.transform = 'rotateZ(6deg)';
        }

        // Then continue with a 60 second interval
        setInterval(function() {
        for (var i = 0; i < containers.length; i++) {
            if (containers[i].angle === undefined) {
            containers[i].angle = 12;
            } else {
            containers[i].angle += 6;
            }
            containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
            containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
        }
        }, 60000);
    }

    // Move the second containers
    function moveSecondHand() {
        var containers = document.querySelectorAll('.js-secondContainer');
        setInterval(function() {
        for (var i = 0; i < containers.length; i++) {
            if (containers[i].angle === undefined) {
            containers[i].angle = 6;
            } else {
            containers[i].angle += 6;
            }
            containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
            containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
        }
        }, 1000);
    }
    moveSecondHand();

})();