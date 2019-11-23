import StudentAction from "../actions/studentAction"

const initState = {
    students: [
  
    ]
}

const StudentReducer = (state = initState, action) => {
    switch (action.type) {
        case StudentAction.ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload]
            }

        case StudentAction.DELETE_STUDENT :
            return {
                ...state,
                students : [ ...state.students.filter ( (student) =>{ return student.id !== action.payload })
                ]
            }
                
        default:
            return state

    }
}

export default StudentReducer;