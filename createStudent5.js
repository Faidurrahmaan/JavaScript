function createStudent(str1, str2){
    return {
            FirstName: str1,
            LastName: str2
}
}
let tim = createStudent("Tim", "Garcia");
let matt = createStudent("Matt", "Lane");
let elie = createStudent("Elie", "Schoppik");

let students = [tim, matt, elie];