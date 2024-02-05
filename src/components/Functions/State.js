export function getTypeMonth(type) {
    const monthMap = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "September",
        10: "October",
        11: "November",
        12: "December"
    };

    return monthMap[type] || "Unknown";
}

export const ArrangeIT=(data)=>{

    
    const sortedData = data.sort((a, b) => a.type - b.type);
return sortedData
} 
// Mapping types to months


export const ApprovalArray=["Approved","Rejected","Pending"]
export const EnquiryStatusArray=["Enquiry","Prospect","Client"]

export  const getQueryParamsObject = (id) => {
    // Assuming you have the full URL or use the window.location.search
    const queryString = id.substring(id.indexOf('?') + 1);

    // Split the query string into an array of key-value pairs
    const queryParamsArray = queryString.split('&');

    // Create an object from the key-value pairs
    const queryParamsObject = queryParamsArray.reduce((acc, param) => {
      const [key, value] = param.split('=');
      acc[key] = value;
      return acc;
    }, {});

    return queryParamsObject;
  };


  export const getRevisionNo=(record)=>{
    let numericPart = parseInt(record?.slice(1)); // Extracts "01" and converts it to a number

            // Reduce the numeric part by 1
            numericPart -= 1;
            const returnvalue="R" + numericPart?.toString().padStart(2, "0");
            // Reconstruct the string with the reduced numeric part
            if(returnvalue==="R00"){

              return "Fresh" 
            }else{
              return returnvalue
            }
  }

  export const IDate=(date)=>{
    const IndianDate=new Date(date).toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      });
      return IndianDate
}