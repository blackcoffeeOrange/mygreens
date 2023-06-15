import { createStore } from 'vuex'


export default createStore({
    state: {
        greens: [
            { 'id': 1, 'name': 'bb' }
            , { 'id': 2, 'name': 'abc' }
        ]
        , count: 2
    },
    getters: {
        getAll: (state) => {
            return state.greens
        },
        getGreenById: (state) => (id) => {
            return state.greens.find(green => green.id === id)
        }
    },
    mutations: {
        save(state, green) {
            console.log("state.greens", state.greens)
            console.log("state.greens", state.greens)
            // console.log("sname", name.id)

            // // idがあったら
            // if (newMemo.id) {
            //   let x = state.memos.find(memo => memo.id === newMemo.id)
            //   x.title = newMemo.title
            //   x.content = newMemo.content
            // } else {
            // name.id = ++state.count
            // unshift() 配列の先頭に値を挿入
            state.greens.unshift(name)
        },
        delete(state, id) {
            
        },
    },


    actions: {

},
    modules: {
    // products
},
    pludgins: {

}
})