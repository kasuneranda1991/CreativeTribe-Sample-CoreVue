<template>
    <div>
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" v-for="user in filteredUsers">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{ user.name }}</h5>
                    <div class="btn-group btn-group-sm" role="group" >
                        <router-link :to="{ name:'AppAlbum',params:{id:user.id} }"><button class="btn btn-sm btn-outline-light">Album</button></router-link>
                        <router-link :to="{ name:'AppPost',params:{id:user.id} }"><button class="btn btn-sm btn-outline-light">Posts</button></router-link>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
          return{
              users:[],
              sKey:'',
          }
        },
        created(){
            this.fetchData();
            this.GetSearchKey();
        },
        computed:{
            //filter users array depend on AppNavbar search key
            filteredUsers(){
                return this.users.filter((user) =>{
                    return user.name.match(this.sKey)
                });
            },
        },
        methods: {
            //get search key from parent
            GetSearchKey(){
                this.$parent.$on('searchKey',(search_key) =>{
                        this.sKey = search_key;
                });
            },
            //get users data
            fetchData(){
                fetch('https://jsonplaceholder.typicode.com/users')
                            .then(res => res.json())
                .then(res =>{
                        this.users = res;
                })
            },

        }
    }
</script>
