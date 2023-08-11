
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "./url";

const allApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${url}` }),
  refetchOnMountOrArgChange: true,
  tagTypes: ["Invoice","Client","User","Items","Quotation"],//refresh when it innvalidates
  endpoints(build) {
    return {
      fetchInvoice: build.query({
        query: () => {
          return {
            url: "/api/invoice/",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
        providesTags: (result = [], error, arg) =>
          result?.length
            ? [...result.map(({ id }) => ({ type: "Invoice", id })), "Invoice"]
            : ["Invoice"],
      }),
      getInvoice: build.query({
        query: (id) => {
          return {
            url: `/api/invoice/${id}/`,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
       
      }),
      createInvoice: build.mutation({
        query: (createJobcardData) => {
          const { user,...data } = createJobcardData;
            console.log(createJobcardData)
        //   var formdata = new FormData();
        //   Object.keys(data).map((form_key) =>
        //     formdata.append(form_key, data[form_key] || "")
        //   );
     
        
          return {
            url: `/api/invoice/`,
            method: "POST",
            body: createJobcardData,
            headers: {
              Accept: "application/json",
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "Invoice", id: arg.id }],
      }),
      deleteInvoice: build.mutation({
        query: (id) => {
       
        //   var formdata = new FormData();
        //   Object.keys(data).map((form_key) =>
        //     formdata.append(form_key, data[form_key] || "")
        //   );
          return {
            url: `/api/invoice/${id}/`,
            method: "DELETE",
            headers: {
              Accept: "application/json",
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "Invoice", id: arg.id }],
      }),





      createQuotation: build.mutation({
        query: (createJobcardData) => {
          const { user,...data } = createJobcardData;
            console.log(createJobcardData)
        //   var formdata = new FormData();
        //   Object.keys(data).map((form_key) =>
        //     formdata.append(form_key, data[form_key] || "")
        //   );
     
        
          return {
            url: `/api/quotation/`,
            method: "POST",
            body: createJobcardData,
            headers: {
              Accept: "application/json",
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "Quotation", id: arg.id }],
      }),
      fetchQuotation: build.query({
        query: ({val,id}) => {
          return {
            url: `/api/quotation/?page=${val}&user_client_id=${id}`,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
        providesTags: (result = [], error, arg) =>
          result?.length
            ? [...result.map(({ id }) => ({ type: "Quotation", id })), "Quotation"]
            : ["Quotation"],
      }),
      getQuotationCount: build.query({
        query: ({name}) => {
          if(name){

            return {
              url: `/api/quotation/?quotation_number=${name}`,
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          };
        },
        providesTags: (result = [], error, arg) =>
          result?.length
            ? [...result.map(({ id }) => ({ type: "Quotation", id })), "Quotation"]
            : ["Quotation"],
      }),
      
      getQuotation: build.query({
        query: (id) => {
          if(id!==undefined){

            return {
              url: `/api/quotation/${id}/`,
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            };
          }
        },
       
      }),
      deleteQuotation: build.mutation({
        query: (id) => {
       
        //   var formdata = new FormData();
        //   Object.keys(data).map((form_key) =>
        //     formdata.append(form_key, data[form_key] || "")
        //   );
          return {
            url: `/api/quotation/${id}/`,
            method: "DELETE",
            headers: {
              Accept: "application/json",
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "Quotation", id: arg.id }],
      }),







      fetchClient: build.query({
        query: ({val,id}) => {
          if(id===undefined){
            id=""
          }
          return {
            url: `/api/client/?page=${val}&user_client_id=${id}`,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
        providesTags: (result = [], error, arg) =>
        result?.results?.length
          ? [...result.results.map(({ id }) => ({ type: "Client", id })), "Client"]
          : ["Client"],
       
      }),
      fetchItems: build.query({
        query: ({val,search}) => {
          return {
            url: `/api/items/?page=${val}&search=${search}`,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
        providesTags: (result = [], error, arg) =>
        result?.results?.length
          ? [...result.results.map(({ id }) => ({ type: "Items", id })), "Items"]
          : ["Items"],
       
      }),
      searchClient: build.query({
        query: ({val,id,page}) => {
          return {
            url: `/api/client/?page=${page}&search=${val}&user_client_id=${id}`,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
        providesTags: (result = [], error, arg) =>
        result?.results?.length
          ? [...result.results.map(({ id }) => ({ type: "Client", id })), "Client"]
          : ["Client"],
       
      }),
      createClient: build.mutation({
        query: (createJobcardData) => {
          const { user,...data } = createJobcardData;
            console.log(createJobcardData)
        //   var formdata = new FormData();
        //   Object.keys(data).map((form_key) =>
        //     formdata.append(form_key, data[form_key] || "")
        //   );
     
        
          return {
            url: `/api/client/`,
            method: "POST",
            body: createJobcardData,
            headers: {
              Accept: "application/json",
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "Client", id: arg.id }],
      }),
      deleteItem: build.mutation({
        query: (id) => {
       
        //   var formdata = new FormData();
        //   Object.keys(data).map((form_key) =>
        //     formdata.append(form_key, data[form_key] || "")
        //   );
          return {
            url: `/api/items/${id}/`,
            method: "DELETE",
            headers: {
              Accept: "application/json",
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "Items", id: arg.id }],
      }),
      deleteClient: build.mutation({
        query: (id) => {
       
        //   var formdata = new FormData();
        //   Object.keys(data).map((form_key) =>
        //     formdata.append(form_key, data[form_key] || "")
        //   );
          return {
            url: `/api/client/${id}/`,
            method: "DELETE",
            headers: {
              Accept: "application/json",
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "Client", id: arg.id }],
      }),

      createItem: build.mutation({
        query: (createJobcardData) => {
          const { user,...data } = createJobcardData;
            console.log(createJobcardData)
        //   var formdata = new FormData();
        //   Object.keys(data).map((form_key) =>
        //     formdata.append(form_key, data[form_key] || "")
        //   );
     
        
          return {
            url: `/api/items/`,
            method: "POST",
            body: createJobcardData,
            headers: {
              Accept: "application/json",
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "Items", id: arg.id }],
      }),

 




  
      upadteItems: build.mutation({
        query: (upadate_value) => {
          const { id,...data } = upadate_value;
            console.log(upadate_value)
       
        //   var formdata = new FormData();
        //   Object.keys(data).map((form_key) =>
        //     formdata.append(form_key, data[form_key] || "")
        //   );
          return {
            url: `/api/items/${id}/`,
            method: "PUT",
            body: upadate_value,

            headers: {
              Accept: "application/json",
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "Items", id: arg.id }],
      }),
      getItems: build.query({
        query: (id) => {
          return {
            url: `/api/items/${id}/`,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
       
      }), 
  
      upadteClient: build.mutation({
        query: (upadate_value) => {
          const { id,...data } = upadate_value;
            console.log(upadate_value)
       
        //   var formdata = new FormData();
        //   Object.keys(data).map((form_key) =>
        //     formdata.append(form_key, data[form_key] || "")
        //   );
          return {
            url: `/api/client/${id}/`,
            method: "PUT",
            body: upadate_value,

            headers: {
              Accept: "application/json",
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "Client", id: arg.id }],
      }),
      getClient: build.query({
        query: (id) => {
          if(id!==undefined){

            return {
              url: `/api/client/${id}/`,
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
            }
          };
        },
       
      }), 























     
      fetchInventory: build.query({
        query: () => {
          return {
            url: "/api/inventory/",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
       
      }),
      fetchCategory: build.query({
        query: () => {
          return {
            url: "/api/category/",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
       
      }),
      fetchInteriorGallery: build.query({
        query: () => {
          return {
            url: "/api/image/",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
       
      }),
      fetchDesignGallery: build.query({
        query: () => {
          return {
            url: "/api/designimage/",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          };
        },
       
      }),
      upadteInventory: build.mutation({
        query: (upadate_value) => {
          const { id,...data } = upadate_value;
            console.log(upadate_value)
        //   var formdata = new FormData();
        //   Object.keys(data).map((form_key) =>
        //     formdata.append(form_key, data[form_key] || "")
        //   );
     
        
          return {
            url: `/api/inventory/${id}/`,
            method: "PUT",
            body: upadate_value,
            headers: {
              Accept: "application/json",
              // ...formdata.getHeaders(),
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "Invoice", id: arg.id }],
      }),

  
      upadtePassword: build.mutation({
        query: (upadate_value) => {
          // const { id,...data } = upadate_value;
          const user =JSON.parse(localStorage.getItem('user'))
            console.log(upadate_value)
        //   var formdata = new FormData();
        //   Object.keys(data).map((form_key) =>
        //     formdata.append(form_key, data[form_key] || "")
        //   );
     
        
          return {
            url: `/app/change_password/${user.id}/`,
            method: "PUT",
            body: upadate_value,
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("userToken")}`,
              "content-Type": "application/json",
            },
          };
        },
        invalidatesTags: (result, error, arg) => [{ type: "User", id: arg.id }],
      }),
     
    };
  },
});

export const {
  
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
  useGetQuotationCountQuery,
  
  useDeleteItemMutation,
  useGetItemsQuery,
  useUpadteItemsMutation,
  useCreateItemMutation,
  useFetchCategoryQuery,

  useFetchDesignGalleryQuery,
  useFetchInteriorGalleryQuery,

} = allApi;

export { allApi };




