import React, { useEffect, useState } from "react";
import TestService from "../services/TestService";

const TestMain = () => {
  // return 문이 useEffect 보다 먼저 읽히므로, setLoading을 통해 화면에 데이터 렌더링 속도조절
  const [loading, setLoading] = useState(true);
  const [testData, setTestData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // service에 서버로의 http호출을 분리
        const response = await TestService.getTestData();
        setTestData(response.data);
      } catch (error) {
        console.log(error);
      }
      // 다 읽어 왔으면 Loading을 false로 바꾸어 주어 rendering 가능하도록
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
      <div>
        {/* loading이 false인 경우 화면 렌더링 */}
        {!loading && (
              <div>
                  id :  {testData.id}<br></br>name : {testData.name}<br></br>age : {testData.age}
              </div>
              
          )}
      </div>
  );
};
export default TestMain;