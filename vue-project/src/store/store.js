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
        save(state, newGreen) {
            console.log("newGreen", newGreen)

            console.log("はい")
            // console.log("sname", name.id)

            // // idがあったら
            // if (newMemo.id) {
            //   let x = state.memos.find(memo => memo.id === newMemo.id)
            //   x.title = newMemo.title
            //   x.content = newMemo.content
            // } else {
            newGreen.id = ++state.count
            // unshift() 配列の先頭に値を挿入
            state.greens.unshift(newGreen)
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