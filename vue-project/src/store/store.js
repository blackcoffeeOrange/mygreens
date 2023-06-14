import {createStore} from 'vuex'


export default createStore({
    state:{
        greens:[ 
            {'id': 1 ,'name':'bb'}
            ,{'id': 2 ,'name':'abc'}
            ]
        ,count: 2
    },
    getters:{
        getAll:(state) =>{
            return state.greens
        },
        getGreenById:(state) =>(id) =>{
            return state.greens.find(green => green.id === id)
        }
    },
    mutations:{
        save(state){
            console.log("state.greens",state.greens)

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