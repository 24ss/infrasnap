import create from 'zustand';

export const useStore = create((set) => ({
  services: [],
  trends: [],
  suggestions: [],
  fetchAll: async () => {
    const [svc, tr, sug] = await Promise.all([
      fetch('http://localhost:5000/api/services').then((r) => r.json()),
      fetch('http://localhost:5000/api/trends?period=daily').then((r) => r.json()),
      fetch('http://localhost:5000/api/suggestions').then((r) => r.json()),
    ]);
    set({ services: svc, trends: tr, suggestions: sug });
  },
}));
