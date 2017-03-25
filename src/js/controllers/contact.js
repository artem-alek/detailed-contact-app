const DATABASE_URL = 'https://enigmatic-lake-53181.herokuapp.com';

function ContactController ($scope, $http, $state) {
  $scope.contacts = [];

  function init () {
    $http.get(`${DATABASE_URL}/contacts/list`).then(resp => {
      $scope.contacts = resp.data;
      //console.log(resp.data);
    });
  }

  init();


  $scope.createContact = function (data) {
    //console.log(data);
    let url = `${DATABASE_URL}/contacts`;
    $http.post(url,data).then(() => {
      $state.go('home');
    });
  };

}

ContactController.$inject = ['$scope', '$http', '$state'];

export default ContactController;
