<template>
    <div class="user-info" v-if="user">
        <img :src="user.photoURL" alt="Profile Picture">
        <div class="user-name">{{ user.displayName }}</div>
        <RouterLink to="/logout" class="menu-item">Log out</RouterLink>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import firebase from '@/firebase.js'; // Adjust the path to your firebase.js file

export default {
    components: {
        RouterLink,
    },
    data() {
        return {
            user: null,
        };
    },
    created() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.user = user;
            }
        });
    },
};
</script>

<style scoped>
.user-info {
    margin-top: 10px;
    text-align: center;
    align-self: center;
}

.user-info img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.user-name {
    color: white;
    margin-bottom: 10px;
}

.menu-item {
    background: none;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 10px;
    margin-top: 10px;
    color: white;
    text-align: center;
    cursor: pointer;
    font-size: 1rem;
}

.menu-item:hover {
    background-color: #a05252;
}
</style>