// Array.from is making 12 items from "Grade 1" to "Grade 12" 
export const grades = Array.from(
    { length: 12 },
    (_, index) => `Grade ${index + 1}`
);

export const enquiryTypes = [
    "Applying for 2027–28",
    "Booking a campus visit",
    "General enquiry",
];