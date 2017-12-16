(function () {
    'use strict';

    SignalSettingController.$inject = ['DatacontextService'];

    function SignalSettingController(datacontextService) {
        var signalSetting = this;

        //methods
        signalSetting.$onInit = $onInit;
        signalSetting.save = save;

        function save(form) {
            if (form.$valid) {
                datacontextService.saveSignalSetting(signalSetting.settings).then(function (res) {
                    alert("Timer updated succefully.");
                })
            }
            else {
                alert("Please fill required field.");
            }
        }

        function $onInit() {
            console.log(signalSetting.settings)
        }
    }

    angular.module('traffic-light-control')
        .controller('SignalSettingController', SignalSettingController);
})();
