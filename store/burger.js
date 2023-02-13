export const state = () => ({
  burger: false,
})

export const getters = {
  burger: (state) => state.burger,
}

export const mutations = {
  setBurger(state) {
    state.burger = !state.burger
  },
}

export const actions = {}
