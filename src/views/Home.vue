<!-- Home.vue -->
 <template>
    <div>Home</div>
    <van-button type="primary" size="largr">大按钮</van-button>
    <button @click="min">-</button>
    <span>购物车</span>
    <button @click="add">+</button>
 </template>

 <script>
 import { useStore } from 'vuex'
export default {
    name: 'Home',
    setup() {
        const store = useStore()
        const add = () => {
            store.dispatch('add', 1)
        }
        const min = () => {
            store.dispatch('min', 1)
        }
        return { add, min }
    }
}
</script>
