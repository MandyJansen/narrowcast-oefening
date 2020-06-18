/* ==========================================================================
   Analogue clock
   ========================================================================== */
(function () {

    function checkTime(i) {
        // check if a 0 needs to be added on 0 - 9
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
      
    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        // add a zero in front of numbers<10
        m = checkTime(m);
        // s = checkTime(s);
        document.querySelector('.js-currentTime').innerHTML = h + ":" + m;
        // document.querySelector('.js-currentTime').innerHTML = h + ":" + m + ":" + s;
        t = setTimeout(function() {
          startTime()
        }, 500);
    }
    startTime();
})();