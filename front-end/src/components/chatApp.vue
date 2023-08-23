<template>
    <!-- <div class="joinChat">
        <input type="text" placeholder="What do you want other users to call you ?" style="width:24rem;" v-model="userName">
        <button @click="userNameSubmit">Submit</button>
    </div> -->
    <div class="display_box" style="">
        <div style="height: 32rem;" class="message-box" ref="message-box">
            <div class="message" v-for="number in divNumber" :key="number"> {{ storedMessage[number-1] }}</div>
        </div>
        <input type="text" id="messageInput" placeholder="Write a message..." 
        style="width: 100%; height: 2rem; border-radius: 0.5rem; margin-top:1rem;" @keydown.enter="send()" v-model="messageInput">
        <button style="position:absolute; bottom: 1%; right: 1%;" @click="send">Send</button>
    </div>
</template>

<script>
import {io} from 'socket.io-client';
    export default {
        name: 'Chat_App',
        data() {
            return {
                divNumber: 0,
                messageInput: '',
                storedMessage: [],
                socket: null,
                userName: ''
            }
        },
        methods: {
            send() {
                this.socket.emit('messageFromClient', this.messageInput);
                this.divNumber++;
                this.storedMessage.push(this.messageInput);
                this.$nextTick(() => {
                    this.$refs['message-box'].scrollTop = this.$refs['message-box'].scrollHeight;
                });
                this.messageInput = '';
            }
        },

        created() {
            this.socket = io();
            this.socket.on('messageFromServer', (msg) => {
                this.divNumber++;
                this.storedMessage.push(msg);
                this.$nextTick(() => {
                    this.$refs['message-box'].scrollTop = this.$refs['message-box'].scrollHeight;
                });
            });

            this.socket.on('messageHistory', (msgHistory) => {
                this.divNumber = msgHistory.length;
                this.storedMessage = msgHistory;
                this.$nextTick(() => {
                    this.$refs['message-box'].scrollTop = this.$refs['message-box'].scrollHeight;
                });
            });
        },
        beforeUnmount() {
            this.socket.emit('disconnected');
        }
    }
</script>

<style scoped>

.display_box {
    width: 25rem;
    height: 35rem;
    background-color: tomato;
    margin: 0;
    position: relative;
}

::-webkit-scrollbar {
    width: 0;
}

.message-box {
    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;
    overflow-y: scroll;
}
.message{
    max-width:80%;
    overflow-wrap: break-word;
    width: fit-content;
    height: fit-content;
    background-color: coral;
    border-radius: 0.5rem;
    padding: 0.4rem;
}
</style>