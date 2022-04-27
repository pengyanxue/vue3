const state = {
  visitedViews: [],
  cachedViews: []
}

const mutations = {
  ADD_VISITED_VIEW: (state, view) => {
    let tag = false
    if (view.meta.aboutMenu && view.meta.aboutMenu === 'SubSysListView') {
      if (view.name === 'SubSysListView') {
        const fullP = `/subSysListView/${view.query.sysid}?sysid=${view.query.sysid}`
        tag = state.visitedViews.some(v => v.fullPath.indexOf(fullP) > -1)
      } else {
        tag = state.visitedViews.some(v => v.path === view.path || decodeURI(v.path) === decodeURI(view.path))
      }
    } else if (view.meta.aboutMenu && view.meta.aboutMenu === 'reportPreview') {
      const fullP = `/reportPreview?_u=${view.query._u}&_t=${view.query._t}`
      tag = state.visitedViews.some(v => v.fullPath.indexOf(fullP) > -1)
    } else if ( view.meta && view.meta.hidden ) {
      tag = true
    } else {
      tag = state.visitedViews.some(v => v.path === view.path || decodeURI(v.path) === decodeURI(view.path))
    }
    if (tag) {
      return
    }
    state.visitedViews.push(
      Object.assign({}, view, {
        title: view.meta.title || 'no-name'
      })
    )
  },
  ADD_CACHED_VIEW: (state, view) => {
    let tag = false
    if (view.meta.aboutMenu) {

      if(view.meta.aboutMenu === 'SubSysListView'&&view.query&&view.query.add&&view.query.add==1){
        tag = state.cachedViews.includes(`${view.name}-${view.query.sysid}`)
      }else if(view.meta.aboutMenu === 'SubSysListView'&&view.query&&view.query.dataId){
        tag = state.cachedViews.includes(`${view.name}-${view.query.dataId}`)
      /* }else if (view.meta.aboutMenu === 'SubSysListView' || view.meta.aboutMenu === 'reportPreview') { */
      }else if(view.meta.aboutMenu === 'SubSysListView'&&view.query&&view.query.processInstanceId){
        tag = state.cachedViews.includes(`${view.name}-${view.query.processInstanceId}`)
      }else if (view.name === 'SubSysListView' || view.name === 'ReportPreview') {
        tag = state.cachedViews.includes(`${view.name}-${view.meta.title}`)
      }else{
        tag = state.cachedViews.includes(view.name)
      }
    } else {
      tag = state.cachedViews.includes(view.name)
    }
    if (tag) return

    if (!view.meta.noCache) {
      if (view.name === 'SubSysListView' || view.name === 'ReportPreview') {
        state.cachedViews.push(`${view.name}-${view.meta.title}`)
      } else if(view.query&&view.query.add&&view.query.add==1 ){
        state.cachedViews.push(`${view.name}-${view.query.sysid}`)
      } else if(view.query&&view.query.dataId){
        state.cachedViews.push(`${view.name}-${view.query.dataId}`)
      }  else if(view.query&&view.query.processInstanceId){
        state.cachedViews.push(`${view.name}-${view.query.processInstanceId}`)
      } else{
        state.cachedViews.push(view.name)
      }
    }
  },

  DEL_VISITED_VIEW: (state, view) => {
    for (const [i, v] of state.visitedViews.entries()) {
      if (view.name === 'SubSysListView' || view.name === 'ReportPreview') {
        if (v.fullPath === view.fullPath || decodeURI(v.fullPath) === decodeURI(view.fullPath)) {
          state.visitedViews.splice(i, 1)
          break
        }
      } else {
        if (v.path === view.path || decodeURI(v.path) === decodeURI(view.path)) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
    }
  },
  DEL_CACHED_VIEW: (state, view) => {
    let index = -1
    if (view.name === 'SubSysListView' || view.name === 'ReportPreview') {
      index = state.cachedViews.indexOf(`${view.name}-${view.meta.title}`)
    }else if(view.query&&view.query.add&&view.query.add==1){
      index = state.cachedViews.indexOf(`${view.name}-${view.query.sysid}`)
    }else if(view.query&&view.query.dataId){
      index = state.cachedViews.indexOf(`${view.name}-${view.query.dataId}`)
    }else if(view.query&&view.query.processInstanceId){ 
      index = state.cachedViews.indexOf(`${view.name}-${view.query.processInstanceId}`)
    } else {
      index = state.cachedViews.indexOf(view.name)
    }
    index > -1 && state.cachedViews.splice(index, 1)
  },

  DEL_OTHERS_VISITED_VIEWS: (state, view) => {
    if (view.name === 'SubSysListView' || view.name === 'ReportPreview') {
      state.visitedViews = state.visitedViews.filter(v => {
        return v.meta.affix || `${v.name}-${v.title}` === `${view.name}-${view.title}`
      })
    } else {
      state.visitedViews = state.visitedViews.filter(v => {
        return v.meta.affix || v.path === view.path || decodeURI(v.path) === decodeURI(view.path)
      })
    }
  },
  DEL_OTHERS_CACHED_VIEWS: (state, view) => {
    let index = -1
    if (view.name === 'SubSysListView' || view.name === 'ReportPreview') {
      index = state.cachedViews.indexOf(`${view.name}-${view.title}`)
    } else if(view.query&&view.query.add&&view.query.add==1){
      index = state.cachedViews.indexOf(`${view.name}-${view.query.sysid}`)
    } else if(view.query&&view.query.dataId){
      index = state.cachedViews.indexOf(`${view.name}-${view.query.dataId}`)
    } else if(view.query&&view.query.processInstanceId){
      index = state.cachedViews.indexOf(`${view.name}-${view.query.processInstanceId}`)
    } else {
      index = state.cachedViews.indexOf(view.name)
    }

    if (index > -1) {
      state.cachedViews = state.cachedViews.slice(index, index + 1)
    } else {
      // if index = -1, there is no cached tags
      state.cachedViews = []
    }
  },

  DEL_ALL_VISITED_VIEWS: state => {
    // keep affix tags
    const affixTags = state.visitedViews.filter(tag => tag.meta.affix)
    state.visitedViews = affixTags
  },
  DEL_ALL_CACHED_VIEWS: state => {
    state.cachedViews = []
  },

  UPDATE_VISITED_VIEW: (state, view) => {
    for (let v of state.visitedViews) {
      if (view.name === 'SubSysListView' || view.name === 'ReportPreview') {
        if (v.fullPath === view.fullPath || v.fullPath === view.fullPath.split('&')[0] ) {
          v = Object.assign(v, view)
          break
        }
      } else {
        if (v.path === view.path  || decodeURI(v.path) === decodeURI(view.path)) {
          v = Object.assign(v, view)
          break
        }
      }
    }
  }
}

const actions = {
  addView({ dispatch }, view) {
    dispatch('addVisitedView', view)
    dispatch('addCachedView', view)
  },
  addVisitedView({ commit }, view) {
    commit('ADD_VISITED_VIEW', view)
  },
  addCachedView({ commit }, view) {
    commit('ADD_CACHED_VIEW', view)
  },

  delView({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('delVisitedView', view)
      dispatch('delCachedView', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },
  delVisitedView({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_VISITED_VIEW', view)
      resolve([...state.visitedViews])
    })
  },
  delCachedView({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_CACHED_VIEW', view)
      resolve([...state.cachedViews])
    })
  },

  delOthersViews({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('delOthersVisitedViews', view)
      dispatch('delOthersCachedViews', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },
  delOthersVisitedViews({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_OTHERS_VISITED_VIEWS', view)
      resolve([...state.visitedViews])
    })
  },
  delOthersCachedViews({ commit, state }, view) {
    return new Promise(resolve => {
      commit('DEL_OTHERS_CACHED_VIEWS', view)
      resolve([...state.cachedViews])
    })
  },

  delAllViews({ dispatch, state }, view) {
    return new Promise(resolve => {
      dispatch('delAllVisitedViews', view)
      dispatch('delAllCachedViews', view)
      resolve({
        visitedViews: [...state.visitedViews],
        cachedViews: [...state.cachedViews]
      })
    })
  },
  delAllVisitedViews({ commit, state }) {
    return new Promise(resolve => {
      commit('DEL_ALL_VISITED_VIEWS')
      resolve([...state.visitedViews])
    })
  },
  delAllCachedViews({ commit, state }) {
    return new Promise(resolve => {
      commit('DEL_ALL_CACHED_VIEWS')
      resolve([...state.cachedViews])
    })
  },

  updateVisitedView({ commit }, view) {
    commit('UPDATE_VISITED_VIEW', view)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions }
