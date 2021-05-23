package com.ganga.ownerboot.controller;

import com.ganga.ownerboot.OwnerBootApplication;
import com.ganga.ownerboot.model.Owner;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.web.client.HttpClientErrorException;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;


@SpringBootTest(classes = OwnerBootApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ExtendWith(SpringExtension.class)
public class OwnerBootApplicationTests {
	@Autowired
	public TestRestTemplate restTemplate;

	@LocalServerPort
	public int port;

	public String getRootUrl() {
		return "http://localhost:" + port;
	}

	@Test
	public void contextLoads() {

	}

	@Test
	public void testCreateEmployee() {
		Owner employee = new Owner();
		employee.setDepartmentName("admin");
		employee.setManagerName("admin");
		employee.setManagerId(1);
		employee.setManagerContact("9745785478");
		employee.setStaffSalary(8521);
		employee.setManagerMailId("Ganga@gmail.com");
		employee.setManagerSalary(85214);
		employee.setManagerGender("male");
		ResponseEntity<Owner> postResponse = restTemplate.postForEntity(getRootUrl() + "/addManager", employee, Owner.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}

	@Test
	public void testCreateEmployee1() {
		Owner employee = new Owner();
		employee.setDepartmentName("eadmin");
		employee.setManagerName("eadmin");
		employee.setManagerId(2);
		employee.setManagerContact("9845785478");
		employee.setStaffSalary(9521);
		employee.setManagerMailId("Gang@gmail.com");
		employee.setManagerSalary(85514);
		employee.setManagerGender("male");
		ResponseEntity<Owner> postResponse = restTemplate.postForEntity(getRootUrl() + "/addManager", employee, Owner.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}

	@Test
	public void testUpdateEmployee() {
		int id = 1;
		Owner employee = restTemplate.getForObject(getRootUrl() + "/editManager/" + id, Owner.class);
		employee.setDepartmentName("admin1");
		employee.setManagerName("admin2");
		employee.setManagerContact("9745785478");
		employee.setStaffSalary(8525);
		employee.setManagerMailId("Gangarsha@gmail.com");
		employee.setManagerSalary(85224);
		employee.setManagerGender("male");
		restTemplate.put(getRootUrl() + "/editManager/" + id, employee);
		Owner updatedEmployee = restTemplate.getForObject(getRootUrl() + "/editManager/" + id, Owner.class);
		assertNotNull(updatedEmployee);
	}
	@Test
	public void testUpdateEmployee1() {
		int id = 1;
		Owner employee = restTemplate.getForObject(getRootUrl() + "/editManager/" + id, Owner.class);
		employee.setDepartmentName("admin11");
		employee.setManagerName("admin21");
		employee.setManagerContact("9744785478");
		employee.setStaffSalary(8535);
		employee.setManagerMailId("Gangarsh@gmail.com");
		employee.setManagerSalary(85324);
		employee.setManagerGender("male");
		restTemplate.put(getRootUrl() + "/editManager/" + id, employee);
		Owner updatedEmployee = restTemplate.getForObject(getRootUrl() + "/editManager/" + id, Owner.class);
		assertNotNull(updatedEmployee);
	}
	@Test
	public void contextLoads1() {

	}

	@Test
	public void testGetEmployeeById() {
		Owner employee = restTemplate.getForObject(getRootUrl() + "/findManager/1", Owner.class);
		System.out.println(employee.getDepartmentName());
		assertNotNull(employee);
	}
	@Test
	public void testGetEmployeeById1() {
		Owner employee = restTemplate.getForObject(getRootUrl() + "/findManager/2", Owner.class);
		System.out.println(employee.getDepartmentName());
		assertNotNull(employee);
	}

	@Test
	public void testGetAllEmployees() {
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, headers);
		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/findManagers",
				HttpMethod.GET, entity, String.class);
		assertNotNull(response.getBody());
	}

	@Test
	public void testDeleteEmployee() {
		int id = 2;
		Owner employee = restTemplate.getForObject(getRootUrl() + "/deleteManager/" + id, Owner.class);
		assertNotNull(employee);
		restTemplate.delete(getRootUrl() + "/deleteManager/" + id);
		try {
			employee = restTemplate.getForObject(getRootUrl() + "/deleteManager/" + id, Owner.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}
	@Test
	public void contextLoads2() {
	}
	@Test
	public void testDeleteEmployee1() {
		int id = 3;
		Owner employee = restTemplate.getForObject(getRootUrl() + "/deleteManager/" + id, Owner.class);
		assertNotNull(employee);
		restTemplate.delete(getRootUrl() + "/deleteManager/" + id);
		try {
			employee = restTemplate.getForObject(getRootUrl() + "/deleteManager/" + id, Owner.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}
}
