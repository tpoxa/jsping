

function JsPing(clb) {

    this.success = function () {
        clb();
    };

    this.doNotConnectFunction = function () {
        //alert('error');

        setTimeout(function () {
            ping();
        }, 1000);
    };


    this.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    this.ping = function () {
       
        var script = document.createElement('script');
        script.src = 'http://rawgit.com/tpoxa/jsping/master/response.js?d=' + getRandomInt(1, 99999);
        script.onerror = doNotConnectFunction;
        document.body.appendChild(script);

    };
    ping();
}