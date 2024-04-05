<template>
    <div id="app">
        <h1>Profile Setup</h1>
        <div>
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="user.name" placeholder="Enter your name">
        </div>
        <div>
            <label for="gender">Gender:</label>
            <select id="gender" v-model="user.gender">
                <option disabled value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="not_specified">Prefer not to tell</option>
            </select>
        </div>
        <div>
            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" v-model="user.dob">
        </div>
        <div>
            <button id="continue" @click="submitForm">Continue</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileSetup',
    data() {
        return {
            user: {
                name: '',
                gender: '',
                dob: ''
            }
        }
    },
    methods: {
        submitForm() {
            // Logic to handle the form submission
            console.log(this.user);
            // You might want to send this data to a server or perform some validation
        }
    }
}
</script>

<style scoped>
/* CSS styles */
body {
    font-family: Arial, sans-serif;
    background-color: #7b1c2a;
    /* Adjusted to match the image's background */
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#app {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    /* More pronounced shadow */
    width: 340px;
    /* Adjusted to better fit the image's form width */
    transition: box-shadow 0.3s;
}

#app:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    /* Enhanced shadow on hover */
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 10px;
}

input[type="text"],
input[type="date"],
select {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 16px;
}

select {
    appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" fill="#4A5568"/></svg>');
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #9f1722;
    /* Adjusted to match the button color in the image */
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #870f1a;
    /* Darker shade on hover */
}
</style>