const app = angular.module('songs', []);

app.controller('mainController' , ['$http', function($http){

    this.indexOfEditFormToShow = null;
    
    // empty array to store songs in
    this.songs = [];

    // empty object to add data from form submission into
    this.formData = {};

    this.createSong = () =>{
        $http({
            method: 'POST',
            url: '/songs',
            data: this.formData
        }).then( (res)=>{
            console.log(res);
            this.formData = {};
            this.songs.push(res.data);
        }, error => {
            console.error(error)
        }).catch(err => console.error('Catch ', err));
    } // end createSong();

    this.getSongs = () => {
        $http({
            method: 'GET',
            url: '/songs'
        }).then( (res)=>{
            this.songs = res.data;
            this.song = this.songs[0];
        }, error => {
            console.error(error);
        }).catch(err => console.error('Catch ', err))
    } // end getSongs();
    
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

this.getSongs(); // <---- load immediately on page load
}]); // end mainController

