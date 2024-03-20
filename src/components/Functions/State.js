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
export const PaymentArray=["Success","Failed","Pending","Cancelled","Rejected"]

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

export function generatePassword(length) {
  var lowercaseLetters = 'abcdefghijklmnpqrstuvwxyz';
  var uppercaseLetters = 'ABCDEFGHIJKLMNPQRSTUVWXYZ';
  var digits = '123456789';
  var symbols = '@#$%&';

  // Ensure at least one capital letter and one symbol
  var passwordCharacters = lowercaseLetters + digits;
  var password = uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length));
  var middleSymbol = symbols.charAt(Math.floor(Math.random() * symbols.length));

  for (var i = 0; i < Math.floor((length - 2) / 2); i++) {
      password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }

  password += middleSymbol;

  for (var j = 0; j < Math.ceil((length - 2) / 2); j++) {
      password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }

  // Shuffle the password characters
  password = password.split('').sort(function(){return 0.5-Math.random()}).join('');
  
  // Capitalize the first letter
  password = password.charAt(0).toUpperCase() + password.slice(1);

  return password;
}


export const modifyUrl=(url)=> {
  if (url&&url.startsWith("http")) {
      return url.replace(/^http:\/\/[^\/]+\/image\//, '/');
  } else {
      return url;
  }
}

export const roundUpTenPercent=(number)=> {
  return Math.ceil(number * 0.1);
}
export  const validateEmail = (rule, value, callback) => {
  const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  if (!gmailPattern.test(value)) {
    callback('Please enter a valid Gmail address!');
  } else {
    callback();
  }
};

export  const validateNumber = (rule, value, callback) => {
  if (value && value.toString().indexOf('.') !== -1) {
    callback('Please enter a whole number!');
  } else {
    callback();
  }
};