
const axios = require('axios');
const IP = 'http://127.0.0.1:5000';

export function getStudentsList() {
    try {
        return axios.get(IP + '/' + 'students');
    }
    catch (error) {
        return error;
    }
}
export function addNewStudent(studentData) {
    try {
        return axios.post(IP + '/' + 'students', studentData);
    }
    catch(error) {
        return error;
    }
}