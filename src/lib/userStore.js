import { create } from 'zustand';
import supabase from './supbaseClient';

export const useUserStore = create((set) => ({
  currentUser: null,
  isLoading: true,

  fetchUserInfo: async (id) => {
    if (!id) {
      set({ currentUser: null, isLoading: false });
      return;
    }

    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Fetch user error:', error);
      set({ currentUser: null, isLoading: false });
    } else {
      set({ currentUser: data, isLoading: false });
    }
  },
}));
