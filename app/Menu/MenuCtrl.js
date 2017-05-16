'use strict';

angular
    .module('myApp')
    .controller('MenuCtrl', function ($scope, $state) {
        var menuItems = [
            { title: 'Список', ref: 'list' },
            { title: 'Добавить нового', ref: 'createNewPokemon' },
            { title: 'Аккаунт', ref: 'account' }
        ];

        $scope.menu = menuItems;
        $scope.currentState = $state;
        $scope.currentItem = '';

        $scope.$watch('currentState.current.name', function (newValue, oldValue) {
            $scope.currentItem = newValue;
        });

        $scope.setCurrent = function (ref) {
            $scope.currentItem = ref;
        }
    });