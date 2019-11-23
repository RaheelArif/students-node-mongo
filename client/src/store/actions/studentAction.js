class StudentAction {
    static ADD_STUDENT = "ADD_STUDENT"
    static DELETE_STUDENT ="DELETE_STUDENT"

    static  addStudent(student) {
        return {
            type : this.ADD_STUDENT,
            payload: student
        }
    }
    

    static delStudents(id) {
        return {
            type : this.DELETE_STUDENT,
            payload : id
        }
    }
}
export default StudentAction;