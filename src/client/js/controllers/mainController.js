app.controller("mainController", function($scope, $http){
  'use strict';
  var pendingTask;

  // if ($scope.search === undefined) {
  //   $scope.search = "19731445";
  //   fetch();
  // }



  $scope.change = function() {
    if (pendingTask) {
      clearTimeout(pendingTask);
    }
    pendingTask = setTimeout(fetch, 800);
  };

  function fetch() {

    // $http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + $scope.search + '?api_key=a46f4df7-dc1e-4856-bb26-0cdd3c45b6a4')
    //   .success(function(response) {
    //     $http.get('https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/' + response[$scope.search].id + '?beginIndex=0&endIndex=10&api_key=a46f4df7-dc1e-4856-bb26-0cdd3c45b6a4')
    //       .success(function(response) {
    //         $scope.details = response;
    //       });
    //   });

      $http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + $scope.search + '?api_key=a46f4df7-dc1e-4856-bb26-0cdd3c45b6a4')
        .success(function(response) {
          $http.get('https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/' + response[$scope.search].id + '?beginIndex=0&endIndex=15&api_key=a46f4df7-dc1e-4856-bb26-0cdd3c45b6a4')
            .success(function(response) {
              var data = response.matches;
              $scope.rowList = [];
              for(var i=0; i<response.matches.length; i++) {

                if(data[i].lane === "JUNGLE"){
                  $http.get('https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/' + data[i].champion + '?champData=image&api_key=a46f4df7-dc1e-4856-bb26-0cdd3c45b6a4')
                    .success(function(response) {
                      console.log(response)
                      $scope.rowList.push(response);
                    }
                  );
                }
              }
            }
          );
        })
        .error(function(response) {
          $scope.rowList = false;
        });

      $http.get('https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + $scope.search + '?api_key=a46f4df7-dc1e-4856-bb26-0cdd3c45b6a4')
        .success(function(response) {
          $http.get('https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/' + response[$scope.search].id + '?beginIndex=0&endIndex=15&api_key=a46f4df7-dc1e-4856-bb26-0cdd3c45b6a4')
            .success(function(response) {
              var related = response.matches;
              var jungle = 0;
              var top = 0;
              var mid = 0;
              var bot = 0;
              for(var i=0; i<related.length; i++) {
                if(related[i].lane === "JUNGLE") {
                  jungle++;
                }
                else if(related[i].lane === "TOP") {
                  top++;
                }
                else if(related[i].lane === "MID") {
                  mid++;
                }
                else {
                  bot++;
                }
              }

              var topChance = 'top ' + Math.round(top/(top+mid+bot)*100) + '%';
              var midChance = 'mid ' + Math.round(mid/(top+mid+bot)*100) + '%';
              var botChance = 'bot ' + Math.round(bot/(top+mid+bot)*100) + '%';
              $scope.lanes = [topChance, midChance, botChance];

            }
          );
        });


  }

  $scope.select = function() {
    this.setSelectionRange(0, this.value.length);
  }
});
