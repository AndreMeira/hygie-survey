const baseApi = "https://api.hygie.andremeira.com";

export default {
  me: baseApi         + "/api/my-survey",
  auth: baseApi       + "/oauth/token",
  register: baseApi   + "/api/register",
  logout: baseApi     + "/api/logout",
  saveSurvey: baseApi + "/api/survey",
  loadSurvey: c => baseApi   + "/api/survey/" + c,
  loadPreviousAnswers: id => baseApi + "/api/previous-answers/" + id
}
