import { create } from 'zustand'
// import { persist, createJSONStorage } from 'zustand/middleware'

type Themes = {
  isDarkTheme: boolean;
  setDarkTheme: () => void;
};
type API = {
  products: any;
  isLoading: boolean;
  fetchProducts: (url:string)=>void;
}
type Category = {
  categories: any;
  isLoading:boolean,
  fetchCategory: (url:string)=>void;
}

export const useDarkTheme = create<Themes>((set)=>({
  isDarkTheme: false,
  setDarkTheme: () => (set((state) => ({isDarkTheme: !state.isDarkTheme
  })))
}))

export const productsApi = create<API>((set)=> ({
  products:null,
  isLoading:false,
  fetchProducts: async (url:string) => {
    set({ isLoading: true })
    try {
      const res = await fetch(url)
      if (!res.ok) throw res
      set({products: await res.json() })
    } finally {
      set({ isLoading: false })
    }
  }
}))

export const categoryApi = create<Category>((set)=> ({
  categories:null,
  isLoading:false,
  fetchCategory: async (url:string) => {
    set({ isLoading: true })
    try {
      const res = await fetch(url)
      if (!res.ok) throw res
      set({categories: await res.json() })
    } finally {
      set({ isLoading: false })
    }
  }
}))