export interface IStatusStore {
    loading: boolean;
}

const StatusStore: IStatusStore = {
  loading: false
}
const createStatusStore = () => {
  const store = {
    ...StatusStore
  };

  return store;
};

export default createStatusStore;
export type StatusStoreType = ReturnType<typeof createStatusStore>;

