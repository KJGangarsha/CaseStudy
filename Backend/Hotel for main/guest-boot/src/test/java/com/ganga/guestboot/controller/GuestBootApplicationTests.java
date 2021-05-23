package com.ganga.guestboot.controller;


import com.ganga.guestboot.GuestBootApplication;
import com.ganga.guestboot.model.Guest;
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


@SpringBootTest(classes = GuestBootApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ExtendWith(SpringExtension.class)
public class GuestBootApplicationTests {
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
		Guest employee = new Guest();
		employee.setGuestId(1);
		employee.setGuestName("harsha");
		employee.setGuestGender("male");
		employee.setGuestMailId("Ganga@gmail.com");
		employee.setNumberOfPeople(2);
		employee.setGuestContact("78965412");
		employee.setRoomNumber(455);
		ResponseEntity<Guest> postResponse = restTemplate.postForEntity(getRootUrl() + "/addGuest", employee, Guest.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}

	@Test
	public void testCreateEmployee1() {
		Guest employee = new Guest();
		employee.setGuestId(1);
		employee.setGuestName("harha");
		employee.setGuestGender("mle");
		employee.setGuestMailId("Gang@gmail.com");
		employee.setNumberOfPeople(3);
		employee.setGuestContact("74965412");
		employee.setRoomNumber(458);
		ResponseEntity<Guest> postResponse = restTemplate.postForEntity(getRootUrl() + "/addGuest", employee, Guest.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}
	@Test
	public void contextLoads1() {
	}

	@Test
	public void testUpdateEmployee() {
		int id = 1;
		Guest employee = restTemplate.getForObject(getRootUrl() + "/editGuest/" + id, Guest.class);
		employee.setGuestName("admin1");
		employee.setGuestContact("987452113");
		employee.setRoomNumber(879);
		employee.setNumberOfPeople(5);
		employee.setGuestGender("male");
		employee.setGuestMailId("Gangas@gmail.com");
		restTemplate.put(getRootUrl() + "/editGuest/" + id, employee);
		Guest updatedGuest = restTemplate.getForObject(getRootUrl() + "/editGuest/" + id, Guest.class);
		assertNotNull(updatedGuest);
	}
	@Test
	public void testUpdateEmployee1() {
		int id = 2;
		Guest employee = restTemplate.getForObject(getRootUrl() + "/editGuest/" + id, Guest.class);
		employee.setGuestName("adin1");
		employee.setGuestContact("988452113");
		employee.setRoomNumber(889);
		employee.setNumberOfPeople(4);
		employee.setGuestGender("mal");
		employee.setGuestMailId("Gans@gmail.com");
		restTemplate.put(getRootUrl() + "/editGuest/" + id, employee);
		Guest updatedGuest = restTemplate.getForObject(getRootUrl() + "/editGuest/" + id, Guest.class);
		assertNotNull(updatedGuest);
	}
	@Test
	public void testUpdateEmployee2() {
		int id = 3;
		Guest employee = restTemplate.getForObject(getRootUrl() + "/editGuest/" + id, Guest.class);
		employee.setGuestName("adn1");
		employee.setGuestContact("98652113");
		employee.setRoomNumber(839);
		employee.setNumberOfPeople(2);
		employee.setGuestGender("marl");
		employee.setGuestMailId("Gan@gmail.com");
		restTemplate.put(getRootUrl() + "/editGuest/" + id, employee);
		Guest updatedGuest = restTemplate.getForObject(getRootUrl() + "/editGuest/" + id, Guest.class);
		assertNotNull(updatedGuest);
	}

	@Test
	public void testGetEmployeeById() {
		Guest employee = restTemplate.getForObject(getRootUrl() + "/findGuest/1", Guest.class);
		System.out.println(employee.getGuestName());
		assertNotNull(employee);
	}
	@Test
	public void testGetEmployeeById1() {
		Guest employee = restTemplate.getForObject(getRootUrl() + "/findGuest/2", Guest.class);
		System.out.println(employee.getGuestName());
		assertNotNull(employee);
	}

	@Test
	public void testGetAllEmployees() {
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, headers);
		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/findGuests",
				HttpMethod.GET, entity, String.class);
		assertNotNull(response.getBody());
	}

	@Test
	public void testDeleteEmployee() {
		int id = 2;
		Guest guest = restTemplate.getForObject(getRootUrl() + "/deleteGuest/" + id, Guest.class);
		assertNotNull(guest);
		restTemplate.delete(getRootUrl() + "/deleteGuest/" + id);
		try {
			guest = restTemplate.getForObject(getRootUrl() + "/deleteGuest/" + id, Guest.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}
	@Test
	public void testDeleteEmployee1() {
		int id = 1;
		Guest guest = restTemplate.getForObject(getRootUrl() + "/deleteGuest/" + id, Guest.class);
		assertNotNull(guest);
		restTemplate.delete(getRootUrl() + "/deleteGuest/" + id);
		try {
			guest = restTemplate.getForObject(getRootUrl() + "/deleteGuest/" + id, Guest.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}

}
