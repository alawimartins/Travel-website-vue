<template>
     <div id="nav">
         <p class="logo">Travel Tips</p>
         <ul class="nav-links">
            <li class="links">
                 <router-link to="/">Home</router-link> 
            </li>
            <li v-for="destination in destinations" :key = "destination.name" class="links">
                <router-link :to="{
                    name: 'DestinationDetails',
                    params: {slug: destination.slug}
                }">{{destination.name}}</router-link> 
            </li>
         </ul>
      
      
    </div>
    
</template>

<script>
import store from "@/store"
export default {
    data() {
        return{
            destinations: store.destinations

        }
    },
 
}
</script>

<style scoped>
    #nav {
        display: flex;
        flex-direction: row;
    }

    #nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    /* padding: 0 10px; */
    }

    #nav a.router-link-exact-active {
    color: #ab26ab;
    }

    .nav-links {
        display: flex;
    }

    .links {
        padding-right: 20px;
        list-style: none;
    }

    .links:hover {
        text-decoration: underline;
    }

    .logo {
        font-size: 20px;
        color: purple;
        font-weight: bold;
    }

</style>