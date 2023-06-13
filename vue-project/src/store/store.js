import {createStore} from 'vuex'


export default createStore({
    state:{
        greens:[]
    },
    getters:{
        getALL:(state) =>{
            return state.greens
        }
    },
    mutations:{
        save(state){

        },
        delete(state, id){
    
        },

    },
    actions:{

    },
    modules:{
        // products
    },
    pludgins:{

    }
})