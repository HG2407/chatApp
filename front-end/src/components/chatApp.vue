<template>
    <div class="display_box" style="">
        <div style="height: 32rem;" class="message-box" ref="message-box">
            <div class="message" v-for="number in divNumber" :key="number"> 
                <p class="userName">{{ storedMessage[number-1].name }}</p>
                {{ storedMessage[number-1].msg }}</div>
        </div>
        <input type="text" id="messageInput" placeholder="Write a message..." 
        style="width: 100%; height: 2rem; border-radius: 0.5rem; margin-top:1rem;" @keydown.enter="send()" v-model="messageInput">
        <button style="position:absolute; bottom: 1%; right: 1%;" @click="send">Send</button>
    </div>
</template>

<script>
import { initSocket } from '../socket.js';
import {socket} from '../socket.js';

    export default {
        name: 'Chat_App',
        data() {
            return {
                divNumber: 0,
                messageInput: '',
                storedMessage: [],
                socket: null,
                myUN: this.$store.state.userName || localStorage.getItem('userName') ,
                peopleInChat: 0
            }
        },
        methods: {
            send() {
                this.socket.emit('dataEmitted', {event: 'messageFromClient', name:this.myUN, msg: this.messageInput});
                this.divNumber++;
                this.storedMessage.push({name:this.myUN, msg: this.messageInput});
                this.$nextTick(() => {
                    this.$refs['message-box'].scrollTop = this.$refs['message-box'].scrollHeight;
                });
                this.messageInput = '';
            }
        },

        created() {
            initSocket();
            this.socket = socket;
            console.log(this.socket);

            this.socket.on('msgHistory', (msgHistory) => {
                this.divNumber = msgHistory.length;
                console.log(this.divNumber);
                this.storedMessage.push(...msgHistory);
                this.$nextTick(() => {
                    this.$refs['message-box'].scrollTop = this.$refs['message-box'].scrollHeight;
                });
            });

            this.socket.on('JoinedPeople', (number) => {
                this.peopleInChat = number;
                console.log(this.peopleInChat);
            })

            this.socket.on('myUserName', (userName) => {
                this.myUN = userName;
                console.log(this.myUN);
            });

            this.socket.on('messageFromServer', (data) => {
                this.divNumber++;
                this.storedMessage.push({name: data.name, msg: data.msg});
                this.$nextTick(() => {
                    this.$refs['message-box'].scrollTop = this.$refs['message-box'].scrollHeight;
                });
            });
        },
        // beforeUnmount() {
        //     this.socket.emit('disconnected');
        // }
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

.userName {
    margin: 0 0 0.4rem 0;
    font-size: 0.7rem;
    font-weight: bold;
    color: crimson;
}
</style>