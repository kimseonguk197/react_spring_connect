package com.example.demo.RestController;

import com.example.demo.Entity.TestData;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestDataController {
    @GetMapping("api/v1/testdata")
    public TestData testData(){
        TestData td = new TestData();
        td.setId(1);
        td.setName("kim");
        td.setAge(20);
        return td;
    }
}
