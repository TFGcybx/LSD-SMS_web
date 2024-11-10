export default {
    add (ctx, count) {
        ctx.commit('add', {
            count
        })
    },
    min (ctx, count) {
        ctx.commit('min', {
            count
        })
    }
}