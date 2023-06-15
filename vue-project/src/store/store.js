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
        save(state, name) {
            console.log("state.greens", state.greens)
            console.log("sname", name)

            // // idがあったら
            // if (newMemo.id) {
            //   let x = state.memos.find(memo => memo.id === newMemo.id)
            //   x.title = newMemo.title
            //   x.content = newMemo.content
            // } else {
            newMemo.id = ++state.count
            // unshift() 配列の先頭に値を挿入
            state.memos.unshift(newMemo)
        }
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