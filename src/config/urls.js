const baseApi = "https://api.hygie.andremeira.com";

export default {
  me: baseApi       + "/api/survey-result",
  auth: baseApi     + "/oauth/token",
  register: baseApi + "/api/register",
  logout: baseApi   + "/api/logout",

  saveSurvey: baseApi + "/api/survey/save",
  loadSurvey: c => baseApi   + "/api/survey/load/" + c
}
