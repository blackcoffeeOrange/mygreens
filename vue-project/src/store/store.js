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
        ,green_kinds: [
            //植物種類
        ]
    },
    getters: {
        getAll: (state) => {
            return state.greens
        },
        getAllKinds: (state) => {
            return state.green_kinds
        },
        getGreen: (state)=> {
            return state.green
        }
    },
    mutations: {
        greens(state, data){
            state.greens = data
        }
        ,green(state, data){
            state.green = data[0]
        }
        /**
         * @param newGreen 入力値
         */
        ,save(state, newGreen) {
            newGreen.id = state.greens.length + 1
            state.greens.unshift(newGreen)
        },
        delete(state, id) {

        },
    },
    actions: {
        // アクションは、状態を変更するのではなく、ミューテーションをコミットします。
        // アクションは任意の非同期処理を含むことができます。
        getAll(context){
            axios.get('http://localhost:8000/green?_sort=id&_order=desc')
            .then(function (response) {
                context.state.greens = response.data
            })
            .catch(function (error) {
            })
            .finally(function () {
            });
        }
        ,getAllKinds(context){
            axios.get('http://localhost:8000/green_kinds')
            .then(function (response) {
                console.log("response.data",response.data)
                context.state.green_kinds = response.data
            })
            .catch(function (error) {
            })
            .finally(function () {
            });
        }
        ,getGreenById({ commit, state }, payload){
            // // axios.get('http://localhost:5000/')
            axios.get('http://localhost:8000/green?id='+payload.id)
            .then(function (response) {
                state.green = response.data
            commit('green',response.data)
            })
            .catch(function (error) {
            })
            .finally(function () {
            });
        }
        ,save({ commit, state }, payload){
            
            console.log("payload",payload)
            // axios.get('http://localhost:5000/')
            axios.post('http://localhost:8000/green',payload)
            .then(function (response) {
                console.log("成功",response.data);
                 commit('save',response.data)
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
        ,update({ commit, state }, payload){
          
      console.log("update  payload",payload)
            axios.patch('http://localhost:8000/green/'+payload.id, {
                name: payload.name
            })
             .then(function (response) {
                console.log("成功",response.data);
                //  commit('save',response.data)
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
                console.log(error);
            })
            .finally(function () {
                // always executed(axiosの処理結果によらずいつも実行させたい処理を記述)
                console.log("終了");
            });
        }
    },
    modules: {
        // products
    },
    pludgins: {

    }
})