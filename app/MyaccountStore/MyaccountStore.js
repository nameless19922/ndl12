'use strict';

angular
    .module('myApp')
    .factory('MyaccountStore', function() {

        const state = {
            account: null
        };

        return {
            getAccount()  {
                return state.account;
            },

            setAccount(account) {
                if (typeof account === 'object') {
                    state.account = account;
                }
            }
        };

    });