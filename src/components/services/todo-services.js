import axios from "axios"

const instance = axios.create({
    withCredentials: false,
    baseURL: 'https://uxcandy.com/~shapoval/test-task-backend/v2/',
    headers: {
        'content-type': 'multipart/form-data'
    }
});

export default class TodoServices  {
    sortTodoTask (name, param, arg, numerpage) {
        return instance.get(`?developer=${name}&sort_field=${param}&sort_direction=${arg}&page=${numerpage}`);
    }
    addTodoList(name, email, text) {
        let form = new FormData();
        form.append("username", name);
        form.append("email", email);
        form.append("text", text);
        return instance.post(`create?developer=${name}`, form);
    }
    userLogin(name,login, password) {
        let form = new FormData();
        form.append("username", login);
        form.append("password", password);
        return instance.post(`login?developer=${name}`, form );
    }
    editTodo(name, id, token, text, status) {
        let form = new FormData();
        form.append("token", token);
        form.append("text", text);
        form.append("status", status);
        return instance.post(`/edit/${id}?developer=${name}`, form);
    }

}
