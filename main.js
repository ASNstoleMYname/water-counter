
// alert("javascript")


const app = Vue.createApp({
    data() {
        return {
            water: 0,
        }
    },

    methods: {
        addWater() {
            this.water++;
        },
        removeWater() {
            this.water--;
        }
    }
})

app.mount('.app')