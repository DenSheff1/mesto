export default class UserInfo {
  constructor(username, userjob) {
    this._username = username;
    this._userjob = userjob;
  }

  getUserInfo() {
    return {
      username: this._username.textContent,
      job: this._userjob.textContent
    };
  }

  setUserInfo(inputSource) {
    this._username.textContent = inputSource.username;
    this._userjob.textContent = inputSource.job;
  }
}
