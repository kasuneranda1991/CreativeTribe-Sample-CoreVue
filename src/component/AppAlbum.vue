<template>
    <div>
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" v-for="album in albums">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{ album.title }}</h5>
                    <div class="btn-group btn-group-sm" role="group" >
                        <button v-on:click="getAlbumPhoto(album.id)" class="btn btn-sm btn-outline-light">Album</button>
                    </div>
                </div>
            </a>
        </div>
        <div class="modal fade" id="photoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="card" v-for="photo in photos">
                            <div class="card-header">
                                {{ photo.title }}
                            </div>
                            <div class="card-body">
                                <img v-bind:src="photo.url" class="img-fluid" alt="Responsive image">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                albums:[],
                photos:[]
            }
        },
        created(){
          this.getAlbums();
        },
        methods:{
            //get user album
            getAlbums(){
                fetch('https://jsonplaceholder.typicode.com/albums?userId='+this.$route.params.id)
                        .then(res => res.json())
                .then(res =>{
                    this.albums = res;
                })
            },
            //get album images
            getAlbumPhoto(id){
                fetch('https://jsonplaceholder.typicode.com/photos?albumId='+id)
                        .then(res => res.json())
                    .then(res =>{
                        $('#photoModal').modal('show');
                        this.photos = res;
                })
            }
        }
    }
</script>