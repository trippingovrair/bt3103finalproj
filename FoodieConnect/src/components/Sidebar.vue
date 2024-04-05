<template>
    <div id="sidebar">
        <div class="menu-item">Home</div>
        <div class="menu-item">Profile</div>
        <div class="menu-item">Food Diary</div>
        <div class="menu-item">New Post</div>
        <div class="menu-item">Saved List</div>
        <div class="menu-item">Food Near Me</div>
        <div class="menu-item">Communities</div>
        <div class="menu-item">FAQ</div>
        <user-info></user-info>
    </div>
</template>

<script>
import UserInfo from './UserInfo.vue';

export default {
    components: {
        UserInfo,
    },
};
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
</style>