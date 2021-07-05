// // To find an object through for loop
const profile = [{Name: "Dipen", id:1802, Hobbies: "Browsing"},
{Name: "Muktar", id: 1594, Hobbies: "Programming"},
{Name: "Khirod", id: 1622, Hobbies: "Math"},
{Name: "Rashed", id: 1641, Hobbies: "Bangla"},
{Name: "Dewan", id: 2557, Hobbies: "English"}];
const result = [];
for (let i = 0; i<profile.length; i++){
    const element = profile[i];
    const {Hobbies} = element;
    result.push(Hobbies);
}
console.log(result);

// To find an object through map
const profile = [{Name: "Dipen", id:1802, Hobbies: "Browsing"},
{Name: "Muktar", id: 1594, Hobbies: "Programming"},
{Name: "Khirod", id: 1622, Hobbies: "Math"},
{Name: "Rashed", id: 1641, Hobbies: "Bangla"},
{Name: "Dewan", id: 2557, Hobbies: "English"}];
const hobbies = profile.map(x=>x.Hobbies);
const ids = profile.map(x=>x.id);
const names = profile.map(x=>x.Name);
const sorting = profile.filter(x=>x.id > 1600);
console.log(hobbies,ids,names);
// console.log(sorting);