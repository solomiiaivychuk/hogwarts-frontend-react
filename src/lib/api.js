
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
export function getStudentByEmail(email) {
    try {
        return axios.get(IP + '/students/' + email);
    }
    catch(error) {
        return error
    }
}

export function deleteStudent(email) {
    const httpHeaders = {Authorization: email};
    const configObj = {headers: httpHeaders, data: {email: email}};
    return axios.delete(IP + '/students', configObj).then((response) => {
        return response.data;
    });

}

export function signUp(admin) {
    try {
        return axios.post(IP + '/' + "signup", admin);
    }
    catch(error) {
        return error
    }
}

export function login(admin) {
    try {
        return axios.post(IP + '/' + "login", admin);
    }
    catch(error) {
        return error
    }
}

