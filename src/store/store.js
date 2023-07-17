import { configureStore } from "@reduxjs/toolkit";
import { allApi} from "./mutation/AllApi";
import userReducer from "./mutation/userSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    [allApi.reducerPath]: allApi.reducer,
  },
  
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(allApi.middleware);
  },
//   devTools: process.env.NODE_ENV !== "production",
});

export default store;

export {
    useFetchInvoiceQuery,
    useGetInvoiceQuery,
    useCreateInvoiceMutation,
    useDeleteInvoiceMutation,
    useFetchClientQuery,
    useFetchInventoryQuery,
    useUpadteInventoryMutation,
    useCreateClientMutation,
    useDeleteClientMutation,
    useUpadteClientMutation,
    useGetClientQuery,
    useUpadtePasswordMutation,

    useSearchClientQuery,
    useFetchItemsQuery,
    useCreateQuotationMutation,

    useFetchQuotationQuery,
    useGetQuotationQuery,
    useDeleteQuotationMutation,
    
    useDeleteItemMutation,
    useGetItemsQuery,
    useUpadteItemsMutation,
    useCreateItemMutation,



} from "./mutation/AllApi";