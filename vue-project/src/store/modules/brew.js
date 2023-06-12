const state = {
    brews : {}
}

const getters = {
    brews:state => state.brews
}

const actions = []

const mutations = {

    SET_STORE(state, brews){
        state.brews = brews;
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}