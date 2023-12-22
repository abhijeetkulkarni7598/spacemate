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
