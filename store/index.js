export const state = () => ({
  title: 'My app',
  inputText: 'test',
  pros: [
    { title: 'Item 1', id: 0 },
    { title: 'Item 2', id: 1 }
  ],
  cons: []
})

export const mutations = {
  addToPros: (state, item) => {
    state.pros = {
      ...state.pros,
      item
    }
  },

  addToCons: (state, item) => {
    state.cons = {
      ...state.cons,
      item
    }
  },

  clearInputText: (state) => {
    state.inputText = ''
  }
}

export const actions = {
  addToPros({ commit }, item) {
    commit('addToPros', item)
  },

  addToCons({ commit }, item) {
    commit('addToCons', item)
  }
}
