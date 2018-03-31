const app = angular.module('songs', []);

app.controller('mainController' , ['$http', function($http){
    this.indexOfEditFormToShow = null;
    
    this.editSongs = ( song ) => {
    $http({
        method: 'PUT',
        url: '/songs/' + song._id,
        data: {
            song: this.song,
            albumn: this.albumn,
            cover: this.cover
        }
    }).then( response => {
        this.getSongs();
    }, error => {
        console.log( error );
    });
}

this.deleteSong = ( song ) => {
    $http({
        method: 'DELETE',
        url: '/songs/' + song._id
    }).then( response => {
        controller.getSongs();
    }, error => {
        console.log( error );
    });
}
}])
