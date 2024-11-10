export default {
    add(state, payload) {
        state.count = state.count + payload.count
    },
    min(state, payload) {
        state.count = state.count - payload.count
    }
}