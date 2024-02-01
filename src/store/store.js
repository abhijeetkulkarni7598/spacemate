import { configureStore } from "@reduxjs/toolkit";
import { allApi } from "./mutation/AllApi";
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
  useUpdateQuotationMutation,

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
  useGetQuotationCountQuery,
  useDeleteItemMutation,
  useGetItemsQuery,
  useUpadteItemsMutation,
  useCreateItemMutation,
  useFetchCategoryQuery,
  useFetchDesignGalleryQuery,
  useFetchInteriorGalleryQuery,
  useFetchStatusQuery,
  useFetchStatusCountQuery,
  useFetchItemCategoryCountQuery,
  useFetchUserCountQuery,
  useFetchMonthlyRevinueQuery,
  useFetchMonthlyRevinuer01Query,
  useFetchDealWonQuery,
  useFetchEmployeeQuery,
  useUpadteEmployeeMutation,
  useCreateEmployeeMutation,
  useDeleteEmployeeMutation,
  useFetchVendorQuery,
  useUpadteVendorMutation,
  useCreateVendorMutation,
  useDeleteVendorMutation,
  useCreateEnquiryMutation,
  useFetchEnquiryQuery,
  useUpdateEnquiryMutation,
  useFetchCustomerQuery,
  
  useCreateDesignMutation,
  useFetchDesignsQuery,
  useUpdateDesignsMutation,
  useGetEnquiryQuery,
  useGetDesignsQuery,
  useFetchExecutionModelQuery,
  useFetchExecutionDesignsQuery,
  useUpdateExecutionModelMutation,
  useCreateExecutionDesignMutation,
  useDeleteExecutionDesignMutation,

  useFetchExecutionUsersQuery,

  useCreateProjectMutation,
  useDeleteProjectMutation,
  useCreateCustomerMutation,





} from "./mutation/AllApi";
