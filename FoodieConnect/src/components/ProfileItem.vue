<template>
    <div class="profile-item">
        <strong class="profile-title">{{ title }}</strong><br>
        <span class="profile-description">{{ description }}</span>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
    },
};
</script>

<style scoped>
.profile-item {
    border: 2px solid #7b1c2a;
    border-radius: 15px;
    padding: 20px 40px;
    margin: 20px 0;
    cursor: pointer;
    background: #fff;
    color: black;
    width: fit-content;
}

.profile-item:hover {
    background-color: #f5f5f5;
}

.profile-title {
    font-weight: bold;
    font-size: 1.2em;
}

.profile-description {
    font-size: 0.9em;
}
</style>