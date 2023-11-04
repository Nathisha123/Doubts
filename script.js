(function (str)
{
 str = str.toLowerCase().split(' ');
 for (var i = 0; i < str.length; i++)
  {
   str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
 }
 console.log(str[i]);
})(["The sTrIng iS in uPPercAse"])






// //let Profile = {
//     "AboutMe":{
//         "Name": "Nathisha SM",
//         "Role":"MERN Developer",
//         "EmailId":"abcd@gmail.com",
//         "PhoneNumber":"1234567890",
//         "Address":[
//             "State":"TamilNadu",
//             "District":"Kanyakumari",
//              "City":"Nagercoil"
//         ],
//         "Education":[
//             "Qualification":"BE-EEE",
//             "University": "Anna University",
//             "Year":"2018",
//             "CGPA": "8.3"
//         ],
//     },
//     "Summary":"A Passionate MERN Stack Developer",
    

//     "Work Experience": {
//         "Job Title" :"Manual Tester",
//         "Description": "Having 3 yrs of experience as a tester",
//         "Company name":"Amazon Development center"
//         "Achievements": "Tested and helped in developing quality software products"
//     },
//     "Skills":{
//     "Name":"Web Development",
//     "Keywords": {"HTML", "CSS", "Javascript"}
//     }
    
//     "Hobby":"Debugging",

//     "Languages known":["English", "Tamil", "Malayalam", "Hindi"]
//     "References": {
//         "name":"qwerty",
//         "contact":"0987654321"

//     }

// }
// console.log(Profile);
