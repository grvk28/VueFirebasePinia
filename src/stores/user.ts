// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'

/**
 * Simulate a login
 */

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    rawUsers: [] as string[],
    fname: '',
    lname:'',
    loggedIn: false,
    uname: null,
  }),

  actions: {
    logout() {
      this.$patch({
        fname: '',
        lname: '',
        loggedIn: false,
        uname: null
      })

      // we could do other stuff like redirecting the user
    },

    register(fname:string,lname:string,uname:String,password:String){
      this.rawUsers.push(fname,lname,uname)
    },
    getters: {
      users: (state): Array<{ fname: string; lname: string; uname: string  }> =>
        state.rawUsers.reduce((users, user) => {
          const existingUser = users.find((it) => it.uname === user)
  
          if (!existingUser) {
            users.push({ fname: users.fname , lname: users.lname, uname: users.uname})
          } else {
            return null
          }
  
          return users
        }, [] as Array<{ fname: string; lname: string, uname: string }>),
    },

    /**
     * Attempt to login a user
     */
    async login(user: string, password: string) {
      const userData = await signInWithEmailAndPassword(auth, user, password)

      this.$patch({
        uname: user,
        ...userData,
      })
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
