import http from '../http-common';

const getAll = async () => {
    try {
        const resposta = await http.get('/grade');
        console.log(resposta);
        return resposta;
    } catch (error) {
        console.log(error);
    }
};

const get = async (id) => {
    try {
        console.log("ID para pesquisa");
        return await http.get(`/grade/${id}`);
    } catch (error) {
        console.log(error);
    }
};

const create = (data) => {
    return http.post('/grade', data);
};

const update = (id, data) => {
    return http.put(`/grade/${id}`, data);
};

const remove = (id) => {
    return http.delete(`/grade/${id}`);
};

const removeAll = () => {
    return http.delete(`/grade`);
};

const findByName = (name) => {
    return http.get(`/grade?name=${name}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByName,
};
