<template>
    <p>{{ roomName }}</p>
<div class="display_box" style="">
        <div style="height: 32rem;" class="message-box" ref="message-box">
            <div class="message" v-for="number in divNumber" :key="number"> 
                <p class="userName">{{ storedMessage[number-1].name }}</p>
                {{ storedMessage[number-1].msg }}</div>
        </div>
        <input type="text" id="messageInput" placeholder="Write a message..." 
        style="width: 100%; height: 2rem; border-radius: 0.5rem; margin-top:1rem;" @keydown.enter="send()" v-model="msgInput">
        <button style="position:absolute; bottom: 1%; right: 1%;" @click="send">Send</button>
</div>
</template>

<script>
import {initSocket} from '../socket.js';
import {socket} from '../socket.js';
    export default {
        name: 'roomPage',
        data() {
            return {
                socket: null,
                divNumber: 0,
                storedMessage: [],
                msgInput: '',
                userName: this.$store.state.userName || localStorage.getItem('userName'),
                roomName: ''
            }
        },

        created() {
            initSocket();
                this.socket = socket;
                localStorage.setItem('userName', this.userName);
                this.socket.emit('roomData', {event: 'joinRoom', id: this.$route.params.id});
                this.socket.emit('roomData', {event: 'sendRoomMsgHistory', roomId: this.$route.params.id });
                this.socket.on('roomMsgHistory', (data) => {
                    this.divNumber = data.msgHistory.length;
                    this.storedMessage = data.msgHistory;
                    this.roomName = data.roomName;
                    this.$nextTick(() => {
                    this.$refs['message-box'].scrollTop = this.$refs['message-box'].scrollHeight;
                    });
                })   

            this.socket.on('messageToRoomFromServer', (msg) => {
                this.divNumber++;
                this.storedMessage.push(msg);
                this.$nextTick(() => {
                    this.$refs['message-box'].scrollTop = this.$refs['message-box'].scrollHeight;
                });
            })
        },

        methods: {
            send() {
                this.socket.emit('roomData', {event: 'messageTyped', name: this.userName, msg: this.msgInput, roomId: this.$route.params.id});
                this.divNumber++;
                this.storedMessage.push({name: this.userName, msg: this.msgInput});
                this.$nextTick(() => {
                    this.$refs['message-box'].scrollTop = this.$refs['message-box'].scrollHeight;
                });
                this.msgInput = '';
            }
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

.userName {
    margin: 0 0 0.4rem 0;
    font-size: 0.7rem;
    font-weight: bold;
    color: crimson;
}

</style>