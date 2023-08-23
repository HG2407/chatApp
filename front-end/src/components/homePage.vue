<template>
    <div>
        <input type="text" placeholder="enter your username" v-model="userName">
        <button class="join" @click="join">Join</button>
    </div>
</template>

<script>

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Home',
        data() {
            return {
                userName:''
            }
        },
        created() {
           
        },
        methods: {
            join() {
                this.$store.commit('setUserName', this.userName)
                this.userName = '';
                this.$router.push({
                    path: '/chatRoom',
                });
            }
        }
        
    }

</script>

<style scoped>

</style>