import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps"
import helper from "../../pages/helper";

const help = new helper();

Given('Perform basic GET Request {string}', (id) => {
    cy.request({
        
        method : 'GET',
        url : 'https://admin.test2.stages.city.interact-lighting.com:8443/api/projects/' + id,
        headers :{
            //'Authorization': help.getkey(),
            'Authorization':'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkwtRWFEZEk1MjMzR3V4SlozMFkyRTEwQWROayIsImtpZCI6IkwtRWFEZEk1MjMzR3V4SlozMFkyRTEwQWROayJ9.eyJpc3MiOiJodHRwczovL2FjY291bnQuaWRlbnRpdHkubGlnaHRpbmcucGhpbGlwcy5jb20vY29yZSIsImF1ZCI6Imh0dHBzOi8vYWNjb3VudC5pZGVudGl0eS5saWdodGluZy5waGlsaXBzLmNvbS9jb3JlL3Jlc291cmNlcyIsImV4cCI6MTYzMTE2MDMwNSwibmJmIjoxNjI4NTY4MzA1LCJjbGllbnRfaWQiOiJDVFgtSW1wbGljaXQtRGV2Iiwic2NvcGUiOlsib3BlbmlkIiwiZW1haWwiLCJyZWFkIiwid3JpdGUiLCJleHRlbmRlZF91c2VyIl0sInN1YiI6IjhlMTcwYzRmLWU4MTQtNDk2Yi04NmY3LWRiZGEwNGYzYWEzYyIsImF1dGhfdGltZSI6MTYyODU2ODMwNywiaWRwIjoiaWRzcnYiLCJlbWFpbCI6Im11dGh1cHJpeWEuc0BzaWduaWZ5LmNvbSIsImVtYWlsX3ZlcmlmaWVkIjoiVHJ1ZSIsImFjY2Vzc2ZhaWxlZGNvdW50IjoiMCIsImNyZWF0ZWRieSI6IkN0eFVzZXJBZG1pbiIsImNyZWF0ZWRvbnV0YyI6IjE2MjE5NjMxMjMiLCJjdWx0dXJlIjoiZW4tVVMiLCJsaW1pdHNpbmdsZWlwIjoiRmFsc2UiLCJsb2dpbmlwIjoiNDkuMzYuODkuMTM1IiwidHdvZmFjdG9yZW1haWwiOiIiLCJzZWNvbmRmYWN0b3Jtb2RlIjoidG9rZW4iLCJzZXNzaW9uaWQiOiI4NzI1MGQwMS00ZmI0LTQxOWQtYjRlZS1hZmZjYmFlMDY4ZTQiLCJhbXIiOlsicGFzc3dvcmQiXX0.Idsxj8WnAFGY6C8nj_9lc74jtjHNVi-NQIuYtwu7Lu3CJjfBvBZx5dikv-xXtI-iKH6uKS4xCc31-_SY8zZFVyezPiy2yoT3DLkws98rw8efmxpnHEMMwUhLNKjvpGp6pXs0hSA7-PsCsjxqPro6Rk87BlBVTAMtNr_PP_eFjP4QP4j9bxhj6ZmFh1nQ9Ho4VcfiDtbpSD-7mPYnr1JLEmjJDDFYJicVwnOoATUXX5nbbx82kRKpCIy7f5aLNOAo1a50vbWu8KsYd2NfcOWrZKyaiCCi2dwjakB-m6FKhgNYBHWMfK2hRAVxffhNm_0Mq8EUVHlZeu0Cu0umR2NJKw' 
        }
    
    }).then((response) => {

        //expect(response.body).have.property('url');
        expect(response.body.success).to.equal(true);

    })
  });