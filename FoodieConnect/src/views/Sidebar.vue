<template>
    <div id="sidebar">
        <div v-for="(item, index) in menuItems" :key="index" class="menu-item" @click="navigate(item)">{{ item }}</div>
        <div class="user-info">
            <img :src="userInfo.avatar" :alt="userInfo.username">
            <div>{{ userInfo.username }}</div>
            <div class="menu-item" @click="$emit('logout')">Log out</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        menuItems: Array,
        userInfo: Object
    },
    methods: {
        navigate(item) {
            console.log("Navigating to", item);
        }
    }
}
</script>

<style scoped>
#sidebar {
    background-color: #7b1c2a;
    width: 220px;
    height: 100vh;
    box-shadow: 3px 0 6px rgba(0, 0, 0, 0.2);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.menu-item {
    background: none;
    border: 2px solid #fff;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    color: white;
    text-align: left;
    cursor: pointer;
    font-size: 1rem;
}

.menu-item:hover {
    background-color: #a05252;
}

.user-info {
    text-align: center;
    align-self: center;
}

.user-info img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 10px;
}
</style>