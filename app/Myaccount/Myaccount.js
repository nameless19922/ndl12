'use strict';

angular
    .module('myApp')
    .controller('Myaccount', function(MyaccountStore) {
        var vm = this;

        vm.saveAccount = function (account) {
            vm.account = null;
            vm.accountForm.$setPristine();

            vm.account = account;
            console.log(account);
            MyaccountStore.setAccount(vm.account);
        };

        vm.account = MyaccountStore.getAccount();
    });