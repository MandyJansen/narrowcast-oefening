/* ==========================================================================
   Clock switch
   ========================================================================== */

(function () {
    var body = document.querySelector('body');

    function init() {
        body.className = 'is-loaded';

        setInterval(function(){ 
            body.classList.toggle('js-clockSwitch');
        }, 10000);
    }
    window.onload = init;

   

})();


