const DATABASE_URL = 'https://enigmatic-lake-53181.herokuapp.com';

function ContactSingleController ($scope, $http, $state, $stateParams) {
  $scope.contact = {};


  function init () {
    $http.get(`${DATABASE_URL}/contact/${$stateParams.contactId}`).then(resp => {
      $scope.contact = resp.data;
      console.log($scope.contact);
    });
  }

  init();
}

ContactSingleController.$inject = ['$scope', '$http', '$state', '$stateParams'];

export default ContactSingleController;
