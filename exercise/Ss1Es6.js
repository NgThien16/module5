let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];
//Yêu cầu 1: in danh sách rating >=4
const highRatingCourses = courses.filter(course => course.rating >= 4);

console.log("Courses rating >= 4:");
highRatingCourses.forEach(course => console.log(course));

//Yêu cầu 2: lấy ra <4 và format lại
const lowRatingCourses = courses
    .filter(course => course.rating < 4)
    .map(course => `${course.id} - ${course.title} - ${course.rating}`);

console.log("Courses rating < 4:");
lowRatingCourses.forEach(course => console.log(course));

//yêu cầu 3; GỘP2 MẢNG
let addedCourses = [
    { id: 6, title: "PHP Tutorial", rating: 3 },
    { id: 7, title: "C# Tutorial", rating: 2 },
    { id: 8, title: "Docker Tutorial", rating: 3.8 }
];

// cách 1: dùng spread operator
const mergedCourses = [...courses, ...addedCourses];

// cách 2: viết hàm ES6
const mergeCourses = (arr1, arr2) => [...arr1, ...arr2];

console.log("Merged courses:");
console.log(mergeCourses(courses, addedCourses));
