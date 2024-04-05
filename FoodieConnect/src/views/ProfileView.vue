<template>
    <div class="profile-content">
        <div class="profile-header">
            <h1>Profile</h1>
        </div>
        <profile-item title="User Profile" description="Edit your personal details"></profile-item>
        <profile-item title="Preferences" description="Change your preferences"></profile-item>
        <profile-item title="Reset Password" description="Change your password"></profile-item>
    </div>
</template>

<script>
import ProfileItem from '../components/ProfileItem.vue';

export default {
    components: {
        ProfileItem,
    },
};
</script>

<style scoped>
.profile-content {
    padding: 100px 50px 50px;
    flex-grow: 1;
    background-color: #fff;
    color: black;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-header {
    width: 100%;
    padding: 10px 0;
    text-align: center;
}
</style>