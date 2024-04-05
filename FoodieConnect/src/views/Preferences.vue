<template>
    <div>
        <h1>Dining Preferences</h1>
        <!-- Display dining preference options as images with scroll bar -->
        <div class="preference-option" v-for="option in options" :key="option.id">
            <img :src="option.image" :alt="option.name">
        </div>
        <button @click="savePreferences">Continue</button>
    </div>
</template>

<script>
export default {
    name: 'Preferences',
    data() {
        return {
            options: [
                { id: 1, name: 'Option 1', image: 'path/to/image1.jpg' },
                { id: 2, name: 'Option 2', image: 'path/to/image2.jpg' },
                // Add more options as needed
            ]
        };
    },
    methods: {
        savePreferences() {
            // Save preferences logic
            this.$router.push('/success');
        }
    }
}
</script>

<style>
.preference-option {
    margin-bottom: 10px;
}
</style>