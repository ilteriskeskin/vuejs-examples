<template>
    <div>
        <p>Lamp Status: {{ status }}</p>
        <button @click="openLamp">Open Lamp</button>
        <hr>
    </div>
</template>

<script>
export default {
    data() {
        return {
            status: "Closed"
        }
    },
    methods: {
        openLamp() {
            this.status = "Open"
        }
    },
}
</script>