import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        greens: [
            // { 'id': 1, 'name': 'bb' }
            // , { 'id': 2, 'name': 'abc' }
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
        
        // アクションは、状態を変更するのではなく、ミューテーションをコミットします。
        // アクションは任意の非同期処理を含むことができます。
        getAll(context){
            
            // console.log("getAll")
            // axios.get('http://localhost:5000/')
            axios.get('http://localhost:8000/green')
            .then(function (response) {
                // console.log("成功",response.data);
                // handle success(axiosの処理が成功した場合に処理させたいことを記述)
                context.state.greens = response.data
                // for (let i = 0; i < plantList.length; i++) {
        
                //     console.log(plantList[i]);
                // }
                // console.log(listdata);
                // return plantList
            })
            .catch(function (error) {
                // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
                console.log(error);
            })
            .finally(function () {
                // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
                // console.log("終了");
            });
        }
        ,getGreenById: (state) => (id) => {
               // console.log("getAll")
            // axios.get('http://localhost:5000/')
            axios.get('http://localhost:8000/green')
            .then(function (response) {
                // console.log("成功",response.data);
                // handle success(axiosの処理が成功した場合に処理させたいことを記述)
                context.state.greens = response.data
                // for (let i = 0; i < plantList.length; i++) {
        
                //     console.log(plantList[i]);
                // }
                // console.log(listdata);
                // return plantList
            })
            .catch(function (error) {
                // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
                console.log(error);
            })
            .finally(function () {
                // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
                // console.log("終了");
            });
            // return state.greens.find(green => green.id === id)
        }
    },
    modules: {
        // products
    },
    pludgins: {

    }
})