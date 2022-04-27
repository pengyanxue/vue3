/*
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-16 15:49:20
 * @LastEditors: pengyanxue
 * @LastEditTime: 2022-04-26 22:26:26
 */
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import { getSidebarStatus, getSize, setSidebarStatus, setLanguage, setSize } from '@/utils/cookies'
// import { getLocale } from '@/locales'
import { store } from '@/store'


export interface AppState {
  device: 'Desktop'
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
  language: string
  size: string
}

@Module({ dynamic, store, name: 'app' })
class App extends VuexModule implements AppState {
  public sidebar = {
    opened: getSidebarStatus() !== 'closed',
    withoutAnimation: false
  }

  public device = 'Desktop'
  // public language = getLocale()
  public size = getSize() || 'medium'

  @Mutation
  private TOGGLE_SIDEBAR(withoutAnimation) {
    this.sidebar.opened = !this.sidebar.opened
    this.sidebar.withoutAnimation = withoutAnimation
    if (this.sidebar.opened) {
      setSidebarStatus('opened')
    } else {
      setSidebarStatus('closed')
    }
  }

  @Mutation
  private CLOSE_SIDEBAR(withoutAnimation) {
    this.sidebar.opened = false
    this.sidebar.withoutAnimation = withoutAnimation
    setSidebarStatus('closed')
  }

  @Mutation
  private TOGGLE_DEVICE(device) {
    this.device = device
  }

  @Mutation
  private SET_LANGUAGE(language) {
    this.language = language
    setLanguage(this.language)
  }

  @Mutation
  private SET_SIZE(size) {
    this.size = size
    setSize(this.size)
  }

  @Action
  public ToggleSideBar(withoutAnimation) {
    this.TOGGLE_SIDEBAR(withoutAnimation)
  }

  @Action
  public CloseSideBar(withoutAnimation) {
    this.CLOSE_SIDEBAR(withoutAnimation)
  }

  @Action
  public ToggleDevice(device) {
    this.TOGGLE_DEVICE(device)
  }

  @Action
  public SetLanguage(language) {
    this.SET_LANGUAGE(language)
  }

  @Action
  public SetSize(size) {
    this.SET_SIZE(size)
  }
}

export const AppModule = getModule(App)
