/* ==========================================================================
   Theme switch
   ========================================================================== */

(function () {
    
    var themeSwitchBtn = document.querySelector('.js-themeSwitch'),
        body = document.querySelector('body');

    themeSwitchBtn.addEventListener('click', function (e) {
        body.classList.toggle('light-theme');
    });

})();