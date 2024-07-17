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
  isLoading:boolean;
  selectedCategory: string;
  setSelectedCategory: (category:string) => void;
  fetchCategory: (url:string)=>void;
}
type AmountProducts = {
  amount: string;
  setAmount: (amount:any) => void;
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
  selectedCategory:'',
  setSelectedCategory: (category) => (set((state)=>({
    selectedCategory: state.selectedCategory = category
  }))),
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

export const AmountProducts = create<AmountProducts>((set)=> ({
  amount: '10',
  setAmount: (amount) =>  (set((state)=>({
    amount: state.amount = amount,
  })))
}))