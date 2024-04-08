<template>
    <div class="update-profile-page">
        <Sidebar />
        <div class="main-content">
            <ProfileCard />
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'; // Make sure the path is correct
import ProfileCard from '@/components/ProfileCard.vue'; // Make sure the path is correct

export default {
    components: {
        Sidebar,
        ProfileCard,
    },
};
</script>

<style scoped>
.update-profile-page {
    display: flex;
    background-color: #fff;
    /* Assuming a white background for the overall layout */
}

.main-content {
    flex-grow: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>