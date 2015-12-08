app.service('api', function($q, Restangular) {
    return {
      getUsers: function(promiseFlag, cb){
        return promiseHandler(Restangular.all('user').getList(), promiseFlag);
      }
    };
  }
);

var promiseHandler = function(p, promiseFlag){
  if(promiseFlag === false){
    p.then(function(list){
      return list;
    });
  }
  else return p;
};
