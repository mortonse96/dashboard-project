
export default function CreateGlobalStore() {
  return {
    currentPage: null,
    setPage(page) {
      this.currentPage = page;
      sessionStorage.setItem('currentPage', page);
    },
  };
}
