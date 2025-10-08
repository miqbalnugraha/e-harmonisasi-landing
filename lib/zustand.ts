import { create } from "zustand";

export const useUser = create((set) => ({
    data: null,
    setData: (data: any) => set({ data }),
}));

export const useModules = create((set) => ({
    dataModules: [],
    setDataModules: (dataModules: []) => set({ dataModules }),
    loading: false,
    setLoading: (loading: boolean) => set({ loading }),
}));

export const useProgramName = create((set) => ({
    listProgramName: [],
    setProgramName: (listProgramName: []) => set({ listProgramName }),
    loadingProgramName: false,
    setLoadingProgramName: (loadingProgramName: boolean) =>
        set({ loadingProgramName }),
}));

export const useApproval = create((set) => ({
    dataApproval: [],
    setDataApproval: (dataApproval: []) => set({ dataApproval }),
    loadingApproval: false,
    setLoadingApproval: (loadingApproval: boolean) => set({ loadingApproval }),
}));

export const useSyncBudget = create((set) => ({
    syncBudget: 0,
    setSyncBudget: (syncBudget: number) => set({ syncBudget }),
    loadingSyncBudget: false,
    setLoadingSyncBudget: (loadingSyncBudget: boolean) =>
        set({ loadingSyncBudget }),
}));

export const useModalApproval = create((set) => ({
    syncModal: 0,
    setSyncModal: (syncModal: number) => set({ syncModal }),
    loadingSyncModal: false,
    setLoadingSyncModal: (loadingSyncModal: boolean) =>
        set({ loadingSyncModal }),
}));

export const useCountButuhApproval = create((set) => ({
    countButuhApproval: 0,
    setCountButuhApproval: (countButuhApproval: number) => set({ countButuhApproval }),
    loadingCountButuhApproval: false,
    setLoadingCountButuhApproval: (loadingCountButuhApproval: boolean) =>
        set({ loadingCountButuhApproval }),
}));

export const useCountInbox = create((set) => ({
    countInbox: 0,
    setCountInbox: (countInbox: number) => set({ countInbox }),
    loadingCountInbox: false,
    setLoadingCountInbox: (loadingCountInbox: boolean) =>
        set({ loadingCountInbox }),
}));

export const useCountPengumuman = create((set) => ({
    countPengumuman: 0,
    setCountPengumuman: (countPengumuman: number) => set({ countPengumuman }),
    loadingCountPengumuman: false,
    setLoadingCountPengumuman: (loadingCountPengumuman: boolean) =>
        set({ loadingCountPengumuman }),
}));

export const useCountEdaran = create((set) => ({
    countEdaran: 0,
    setCountEdaran: (countEdaran: number) => set({ countEdaran }),
    loadingCountEdaran: false,
    setLoadingCountEdaran: (loadingCountEdaran: boolean) =>
        set({ loadingCountEdaran }),
}));

export const useCountSuratPerintah = create((set) => ({
    countSuratPerintah: 0,
    setCountSuratPerintah: (countSuratPerintah: number) => set({ countSuratPerintah }),
    loadingCountSuratPerintah: false,
    setLoadingCountSuratPerintah: (loadingCountSuratPerintah: boolean) =>
        set({ loadingCountSuratPerintah }),
}));

export const useSelectedCostcenter = create((set) => ({
    selectedCostcenter: "",
    setSelectedCostcenter: (selectedCostcenter: string) => set({ selectedCostcenter }),
    loadingSelectedCostcenter: false,
    setLoadingSelectedCostcenter: (loadingSelectedCostcenter: boolean) =>
        set({ loadingSelectedCostcenter }),
}));

export const useIsOpenDialogRole = create((set) => ({
    isOpenDialogRole: false,
    setIsOpenDialogRole: (isOpenDialogRole: boolean) => set({ isOpenDialogRole })
}));

export const useListRole = create((set) => ({
    dataListRole: [],
    setDataListRole: (dataListRole: []) => set({ dataListRole }),
    loadingListRole: false,
    setLoadingListRole: (loadingListRole: boolean) => set({ loadingListRole }),
}));

// export default useUser;
