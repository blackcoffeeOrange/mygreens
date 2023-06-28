import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        greens: [
            // 全植物データ
        ]
        ,green: [
            //植物単体データ
        ]
        // , count: 2
    },
    getters: {
        getAll: (state) => {
            return state.greens
        },
        getGreen: (state)=> {
            return state.green
        }
    },
    mutations: {
        green(state, data){
            state.green = data[0]
        }
        /**
         * @param newGreen 入力値
         */
        ,save(state, newGreen) {
            console.log("state.greens.length", state.greens.length)
            // console.log("sname", name.id)

            // // idがあったら
            // if (newMemo.id) {
            //   let x = state.memos.find(memo => memo.id === newMemo.id)
            //   x.title = newMemo.title
            //   x.content = newMemo.content
            // } else {
            newGreen.id = state.greens.length + 1
            // unshift() 配列の先頭に値を挿入
            state.greens.unshift(newGreen)
            console.log(state.greens)
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
                // console.log(error);
            })
            .finally(function () {
                // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
                // console.log("終了");
            });
        }
        ,getGreenById({ commit, state }, payload){
            // console.log("actions.getGreenById",payload.id)
            //    console.log("id",data.id)
            // // axios.get('http://localhost:5000/')
            axios.get('http://localhost:8000/green?id='+payload.id)
            .then(function (response) {
                // console.log("成功。レスポンス",response.data);
                //     // handle success(axiosの処理が成功した場合に処理させたいことを記述)
                state.green = response.data
                // console.log("成功",state.green)
            //     // for (let i = 0; i < plantList.length; i++) {
            commit('green',response.data)
            //     //     console.log(plantList[i]);
            //     // }
            //     // console.log(listdata);
                // return response.data
            })
            .catch(function (error) {
                // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
                // console.log(error);
            })
            .finally(function () {
                // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
                // console.log("終了");
            });
            // // return state.greens.find(green => green.id === id)
        }
        ,save({ commit, state }, payload){
            
            console.log("payload",payload)
            // axios.get('http://localhost:5000/')
            axios.post('http://localhost:8000/green',payload)
            .then(function (response) {
                console.log("成功",response.data);
                // handle success(axiosの処理が成功した場合に処理させたいことを記述)
                // context.state.greens = response.data
                // for (let i = 0; i < plantList.length; i++) {
                // commit('save',response.data)
                //     console.log(plantList[i]);
                // }
                // console.log(listdata);
                // return plantList
            })
            .catch(function (error) {
                // handle error(axiosの処理にエラーが発生した場合に処理させたいことを記述)
                // console.log(error);
            })
            .finally(function () {
                // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
                // console.log("終了");
            });
        }
    },
    modules: {
        // products
    },
    pludgins: {

    }
})