const DATABASE_URL = "https://enigmatic-lake-53181.herokuapp.com";

function ContactController ($scope, $http, $state) {

    $scope.createContact = function (data) {
        let url = `${DATABASE_URL}/contacts`;
        $http.post(url,data).then(resp => {
            $state.go('home');
        });
    }
}

ContactController.$inject = ['$scope', '$http'];

export default ContactController;