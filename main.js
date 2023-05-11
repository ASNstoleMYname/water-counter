
console.log("🍶 water counter🍶 ");
console.log("feel free to mod")

const app = Vue.createApp({
    // alert("random text")
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
            (this.water <= 0) ? false : this.water--;
        },
        resetWater() {
            this.water = 0;
        }
    }
})


app.mount('.app')
