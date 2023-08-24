<template>
    <div>
        <input type="text" placeholder="enter your username" v-model="userName">
        <h3>Join Global Chat</h3>
        <button class="join" @click="joinGlobal">Join</button>
        <h3>Create Your Own Room</h3>
        <input type="text" placeholder="Your awesome room name" v-model="newRoomName">
        <button class="createRoom" @click="createNewRoom">Create</button>
        <p class="roomId" v-if="roomId" style="border: 0.1rem solid black; width: fit-content;padding: 0 0.5rem;">{{ roomId }}</p>
        <h3>Want to join a room ?</h3>
        <input type="text" placeholder="enter room Id" v-model="existingId">
        <button class="existingId" @click="joinRoom">Join Room</button>
    </div>
</template>

<script>
import { initSocket } from '../socket.js';
import {socket} from '../socket.js'
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Home',
        data() {
            return {
                userName:'',
                roomId: null,
                existingId: '',
                socket: null,
                newRoomName: ''
            }
        },
        created() {

        },

        methods: {

            createNewRoom() {
                initSocket();
                this.socket = socket;
                this.$store.commit('setUserName', this.userName)
                localStorage.setItem('userName', this.userName);
                this.socket.emit('roomData', {event: 'create', name:this.newRoomName, userName: this.userName});
                this.socket.on('roomId', (id) => {
                    this.roomId = `${id}`;
                });
            },

            joinRoom() {
                this.$store.commit('setUserName', this.userName)
                    this.$router.push({
                    path: `/room/${this.existingId}`
                })
            },

            joinGlobal() {
                console.log('here');
                localStorage.setItem('userName', this.userName);
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