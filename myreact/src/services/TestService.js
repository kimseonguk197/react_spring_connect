import axios from "axios";
const TEST_API_BASE_URL = "http://localhost:8080/api/v1/testdata";
class TestService {
  getTestData() {
    // axios라이브러를 통해 쉽게 서버로 data호출
    return axios.get(TEST_API_BASE_URL);
  }
}
export default new TestService();