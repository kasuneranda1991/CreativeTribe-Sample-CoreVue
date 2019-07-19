<template>
    <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" v-for="post in posts">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ post.title }}</h5>
                <button class="btn btn-sm btn-outline-primary" v-on:click="getComments(post.id)">See Comments</button>
            </div>
            <p class="mb-1">{{ post.body }}</p>
            <small class="text-muted">Donec id elit non mi porta.</small>
        </a>
        <div class="modal fade" id="commentModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="card" v-for="comment in comments">
                            <div class="card-header">
                                {{ comment.name }}
                            </div>
                            <div class="card-body">
                                <blockquote class="blockquote mb-0">
                                    <p>{{ comment.body }}</p>
                                    <footer class="blockquote-footer">{{ comment.email }}</footer>
                                </blockquote>
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
                posts:[],
                comments:[]
            }
        },
        created(){
            this.fetchUsePostData();
        },
        methods:{
            //get user post data
            fetchUsePostData(){
                fetch('https://jsonplaceholder.typicode.com/posts?userId='+this.$route.params.id)
                        .then(res => res.json())
                .then(res =>{
                        this.posts = res;
                })
            },
            //get post comment
            getComments(id){
                fetch('https://jsonplaceholder.typicode.com/comments?postId='+id)
                        .then(res => res.json())
                .then(res =>{
                    $('#commentModal').modal('show');
                        this.comments = res;
                })
            }
        }
    }
</script>