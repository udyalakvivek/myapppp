export default function App() {
    let name = "Vivek Pandey";
    let age = 20;
    let course = "Bca"

    let size = 15;
    return (
        <div>
            <h2>My name is : {name}</h2>
            <h2>My age is : {age}</h2>
            <h2>My course is : {course}</h2>
            What is lucky number {size > 50 ? " the size is  Bigger then 50" : " the size is Less than 50"}
            <hr />
            {"Hello everyone how are you i am from Day 3"}
        </div>
    )
}