import { create } from 'zustand';
import supabase from './supbaseClient';


export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid) => {
    if (!uid) return set({ currentUser: null, isLoading: false });

    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', uid) // adjust this field if your primary key isn't 'id'
        .single();

      if (error || !data) {
        console.error(error);
        return set({ currentUser: null, isLoading: false });
      }

      set({ currentUser: data, isLoading: false });
    } catch (err) {
      console.error(err);
      return set({ currentUser: null, isLoading: false });
    }
  },
}));
