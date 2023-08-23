import {createStore} from 'vuex';

export default createStore({
    state: {
        userName: ''
    },
    mutations: {
        setUserName(state, name) {
            state.userName = name;
        }
    }
})