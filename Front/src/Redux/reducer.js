import {
  GET_STUDENTS,
  GET_PROFESORS,
  GET_MATERIAS,
  GET_MATERIAS_BY_ID,
  GET_MATERIAS_BY_NAME,
  GET_MATERIAS_BY_ANIO,
  CLEAN_DETAIL,
  CLEAN_RESPONSE,
  POST_ALUMNO,
  EDIT_ALUMNO,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  VERIFY_USER_SUCCESS,
  VERIFY_USER_ERROR,
  GET_USER_DATA_GOOGLE,
  POST_PROFESOR,
  GET_AULAS,
  RESET_PASSWORD,
} from "./actionsTypes";

const initialState = {
  students: [],
  profesors: [],
  materias: [],
  aulas: [],
  pageCount: "",
  materiaById: [],
  userData: null,
  editResponse: null,
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: payload,
      };
    case POST_ALUMNO:
      return {
        ...state,
      };
    case EDIT_ALUMNO:
      return {
        ...state,
        userData: payload?.alumno ? payload.alumno : state.userData,
        editResponse: payload?.mensaje ? payload.mensaje : payload,
      };
    case POST_PROFESOR:
      return {
        ...state,
      };
    case GET_PROFESORS:
      return {
        ...state,
        profesors: payload,
      };
    case GET_MATERIAS:
      return {
        ...state,
        materias: payload.materias,
        pageCount: payload.pageCount,
      };
    case GET_MATERIAS_BY_ID:
      return {
        ...state,
        materiaById: payload,
      };
    case GET_MATERIAS_BY_NAME:
      return {
        ...state,
        materias: payload,
      };
    case GET_MATERIAS_BY_ANIO:
      return {
        ...state,
        materias: payload,
      };
    case GET_AULAS:
      return {
        ...state,
        aulas: payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        materiaById: payload,
      };
    case CLEAN_RESPONSE:
      return {
        ...state,
        editResponse: payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        userRole: "",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: payload,
      };
    case VERIFY_USER_SUCCESS:
      return {
        ...state,
        userRole: payload.role,
      };
    case VERIFY_USER_ERROR:
      return {
        ...state,
        userRole: "",
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        userData: null,
      };
    case LOGOUT_ERROR:
      return {
        ...state,
      };
    case GET_USER_DATA_GOOGLE:
      return {
        ...state,
        userData: payload,
      };
    case RESET_PASSWORD:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
}
