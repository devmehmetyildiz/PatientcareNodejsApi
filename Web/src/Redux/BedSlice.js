import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ROUTES } from "../Utils/Constants";
import AxiosErrorHelper from "../Utils/AxiosErrorHelper"
import instanse from "./axios";
import config from "../Config";

export const GetBeds = createAsyncThunk(
    'Beds/GetBeds',
    async (_, { dispatch }) => {
        try {
            const response = await instanse.get(config.services.Setting, ROUTES.BED);
            return response.data;
        } catch (error) {
            const errorPayload = AxiosErrorHelper(error);
            dispatch(fillBednotification(errorPayload));
            throw errorPayload;
        }
    }
);

export const GetBed = createAsyncThunk(
    'Beds/GetBed',
    async (guid, { dispatch }) => {
        try {
            const response = await instanse.get(config.services.Setting, `${ROUTES.BED}/${guid}`);
            return response.data;
        } catch (error) {
            const errorPayload = AxiosErrorHelper(error);
            dispatch(fillBednotification(errorPayload));
            throw errorPayload;
        }
    }
);

export const AddBeds = createAsyncThunk(
    'Beds/AddBeds',
    async ({ data, history, redirectUrl, closeModal, clearForm }, { dispatch, getState }) => {
        try {
            const state = getState()
            const t = state?.Profile?.i18n?.t || null
            const response = await instanse.post(config.services.Setting, ROUTES.BED, data);
            dispatch(fillBednotification({
                type: 'Success',
                code: t('Common.Code.Add'),
                description: t('Redux.Beds.Messages.Add'),
            }));
            clearForm && clearForm('BedsCreate')
            closeModal && closeModal()
            history && history.push(redirectUrl ? redirectUrl : '/Beds');
            return response.data;
        } catch (error) {
            const errorPayload = AxiosErrorHelper(error);
            dispatch(fillBednotification(errorPayload));
            throw errorPayload;
        }
    }
);

export const AddRecordBeds = createAsyncThunk(
    'Beds/AddRecordBeds',
    async ({ data, history, redirectUrl, closeModal, clearForm }, { dispatch, getState }) => {
        try {
            const state = getState()
            const t = state?.Profile?.i18n?.t || null
            const response = await instanse.post(config.services.Setting, ROUTES.BED + '/AddRecord', data);
            dispatch(fillBednotification({
                type: 'Success',
                code: t('Common.Code.Add'),
                description: t('Redux.Beds.Messages.Add'),
            }));
            clearForm && clearForm('BedsCreate')
            closeModal && closeModal()
            history && history.push(redirectUrl ? redirectUrl : '/Beds');
            return response.data;
        } catch (error) {
            const errorPayload = AxiosErrorHelper(error);
            dispatch(fillBednotification(errorPayload));
            throw errorPayload;
        }
    }
);

export const EditBeds = createAsyncThunk(
    'Beds/EditBeds',
    async ({ data, history, redirectUrl, closeModal, clearForm }, { dispatch, getState }) => {
        try {
            const state = getState()
            const t = state?.Profile?.i18n?.t || null
            const response = await instanse.put(config.services.Setting, ROUTES.BED, data);
            dispatch(fillBednotification({
                type: 'Success',
                code: t('Common.Code.Update'),
                description: t('Redux.Beds.Messages.Update'),
            }));
            closeModal && closeModal()
            clearForm && clearForm('BedsUpdate')
            history && history.push(redirectUrl ? redirectUrl : '/Beds');
            return response.data;
        } catch (error) {
            const errorPayload = AxiosErrorHelper(error);
            dispatch(fillBednotification(errorPayload));
            throw errorPayload;
        }
    }
);

export const ChangeBedOccupied = createAsyncThunk(
    'Beds/ChangeBedOccupied',
    async ({ data, history, redirectUrl, closeModal, clearForm }, { dispatch, getState }) => {
        try {
            const state = getState()
            const t = state?.Profile?.i18n?.t || null
            const response = await instanse.put(config.services.Setting, ROUTES.BED + '/ChangeBedOccupied', data);
            dispatch(fillBednotification({
                type: 'Success',
                code: t('Common.Code.Update'),
                description: t('Redux.Beds.Messages.Update'),
            }));
            closeModal && closeModal()
            clearForm && clearForm('BedsUpdate')
            history && history.push(redirectUrl ? redirectUrl : '/Beds');
            return response.data;
        } catch (error) {
            const errorPayload = AxiosErrorHelper(error);
            dispatch(fillBednotification(errorPayload));
            throw errorPayload;
        }
    }
);

export const DeleteBeds = createAsyncThunk(
    'Beds/DeleteBeds',
    async (data, { dispatch, getState }) => {
        try {

            const state = getState()
            const t = state?.Profile?.i18n?.t || null
            const response = await instanse.delete(config.services.Setting, `${ROUTES.BED}/${data.Uuid}`);
            dispatch(fillBednotification({
                type: 'Success',
                code: t('Common.Code.Delete'),
                description: t('Redux.Beds.Messages.Delete'),
            }));
            return response.data;
        } catch (error) {
            const errorPayload = AxiosErrorHelper(error);
            dispatch(fillBednotification(errorPayload));
            throw errorPayload;
        }
    }
);

export const BedsSlice = createSlice({
    name: 'Beds',
    initialState: {
        list: [],
        selected_record: {},
        errMsg: null,
        notifications: [],
        isLoading: false,
        isDeletemodalopen: false
    },
    reducers: {
        handleSelectedBed: (state, action) => {
            state.selected_record = action.payload;
        },
        fillBednotification: (state, action) => {
            const payload = action.payload;
            const messages = Array.isArray(payload) ? payload : [payload];
            state.notifications = messages.concat(state.notifications || []);
        },
        removeBednotification: (state) => {
            state.notifications.splice(0, 1);
        },
        handleDeletemodal: (state, action) => {
            state.isDeletemodalopen = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(GetBeds.pending, (state) => {
                state.isLoading = true;
                state.errMsg = null;
            })
            .addCase(GetBeds.fulfilled, (state, action) => {
                state.isLoading = false;
                state.list = action.payload;
            })
            .addCase(GetBeds.rejected, (state, action) => {
                state.list = [];
                state.isLoading = false;
                state.errMsg = action.error.message;
            })
            .addCase(GetBed.pending, (state) => {
                state.isLoading = true;
                state.errMsg = null;
                state.selected_record = {};
            })
            .addCase(GetBed.fulfilled, (state, action) => {
                state.isLoading = false;
                state.selected_record = action.payload;
            })
            .addCase(GetBed.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error.message;
            })
            .addCase(AddBeds.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(AddBeds.fulfilled, (state, action) => {
                state.isLoading = false;
                state.list = action.payload;
            })
            .addCase(AddBeds.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error.message;
            })
            .addCase(AddRecordBeds.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(AddRecordBeds.fulfilled, (state, action) => {
                state.isLoading = false;
                state.list = action.payload;
            })
            .addCase(AddRecordBeds.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error.message;
            })
            .addCase(EditBeds.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(EditBeds.fulfilled, (state, action) => {
                state.isLoading = false;
                state.list = action.payload;
            })
            .addCase(EditBeds.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error.message;
            })
            .addCase(ChangeBedOccupied.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(ChangeBedOccupied.fulfilled, (state, action) => {
                state.isLoading = false;
                state.list = action.payload;
            })
            .addCase(ChangeBedOccupied.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error.message;
            })
            .addCase(DeleteBeds.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(DeleteBeds.fulfilled, (state, action) => {
                state.isLoading = false;
                state.list = action.payload;
            })
            .addCase(DeleteBeds.rejected, (state, action) => {
                state.isLoading = false;
                state.errMsg = action.error.message;
            });
    },
});

export const {
    handleSelectedBed,
    fillBednotification,
    removeBednotification,
    handleDeletemodal
} = BedsSlice.actions;

export default BedsSlice.reducer;