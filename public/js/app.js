const app = angular.module('songs', []);

app.controller('mainController' , ['$http', function($http){

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

this.getSongs(); // <---- load immediately on page load
}]); // end mainController
