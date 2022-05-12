// Список курсов
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];
// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];
let requiredRange4 = [null, null]

let filteredCourses = courses.sort((a,b)=>a.prices[0]-b.prices[0])

// Как я понял, null - не установленное значение, т.е. [500, null] = от 500, [null, 500] = до 500

function coursesFilter(array){
    if(array[1]!==null){
        return filteredCourses.filter(e=>(e.prices[0]>=array[0] && e.prices[0]<=array[1] && e.prices[1]<=array[1]))
    }
    if(array[1]===null){
        return filteredCourses.filter(e=>e.prices[0]>=array[0])
    }
    
}