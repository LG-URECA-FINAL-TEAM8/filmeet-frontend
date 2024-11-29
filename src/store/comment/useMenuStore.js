import { create } from "zustand";

const useMenuStore = create((set) => ({
  openMenuId: null, // 현재 열린 메뉴의 ID (null이면 닫힘)
  openMenu: (id) => set({ openMenuId: id }), // 특정 메뉴 열기
  closeMenu: () => set({ openMenuId: null }), // 메뉴 닫기
}));
