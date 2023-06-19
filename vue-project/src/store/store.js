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
axios.get('http://localhost:8000/green')
//     .then(function (response) {
        
//         console.log("成功");
//         // handle success(axiosの処理が成功した場合に処理させたいことを記述)
//         plantList = response.data
//         for (let i = 0; i < plantList.length; i++) {

//             console.log(plantList[i]);
//         }
//         // console.log(listdata);
//     })
//     .catch(function (error) {
//         // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
//         console.log(error);
//     })
//     .finally(function () {
//         // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
//         console.log("終了");
//     });
    },
    modules: {
        // products
    },
    pludgins: {

    }
})