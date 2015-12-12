app.controller("mainController", function($scope, $http){
  'use strict';
  var pendingTask;

  // if ($scope.search === undefined) {
  //   $scope.search = "19731445";
  //   fetch();
  // }

  var summonerName;


  $scope.change = function() {
    if (pendingTask) {
      clearTimeout(pendingTask);
    }
    pendingTask = setTimeout(fetch, 800);
  };

  function fetch() {

    $http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + $scope.search + '?api_key=a46f4df7-dc1e-4856-bb26-0cdd3c45b6a4')
      .success(function(response) {
        $http.get('https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/' + response[$scope.search].id + '?beginIndex=0&endIndex=10&api_key=a46f4df7-dc1e-4856-bb26-0cdd3c45b6a4')
          .success(function(response) {
            $scope.details = response;
          });
      });


    // $http.get('https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/19731445?beginIndex=0&endIndex=10&api_key=a46f4df7-dc1e-4856-bb26-0cdd3c45b6a4')
    //   .success(function(response) {
    //     $scope.related = response;
    //   });
  }

  $scope.update = function(movie) {
    $scope.search = movie.Title;
    $scope.change();
  };

  $scope.select = function() {
    this.setSelectionRange(0, this.value.length);
  }
});
