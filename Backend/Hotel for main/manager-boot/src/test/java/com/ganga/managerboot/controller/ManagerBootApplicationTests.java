package com.ganga.managerboot.controller;


import com.ganga.managerboot.ManagerBootApplication;
import com.ganga.managerboot.model.Inventory;
import com.ganga.managerboot.model.Room;
import com.ganga.managerboot.model.Staff;
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


@SpringBootTest(classes = ManagerBootApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ExtendWith(SpringExtension.class)
public class ManagerBootApplicationTests {
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
		Staff employee = new Staff();
		employee.setStaffName("admin");
		employee.setStaffDepartment("ex1");
		employee.setStaffId(1);
		employee.setStaffGender("male");
		employee.setStaffContact("97665346");
		employee.setStaffMailId("jssd@dj.com");
		ResponseEntity<Staff> postResponse = restTemplate.postForEntity(getRootUrl() + "/addStaff", employee, Staff.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}

	@Test
	public void testCreateRoom() {
		Room room = new Room();
		room.setRoomType("admin");
		room.setRoomId(1);
		room.setRoomStatus("Booked");
		room.setRoomPrice(800);
		room.setRoomNumber(421);
		ResponseEntity<Room> postResponse = restTemplate.postForEntity(getRootUrl() + "/addRoom", room, Room.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}
	@Test
	public void testCreateInventory() {
		Inventory inventory = new Inventory();
		inventory.setInventoryName("admin");
		inventory.setInventoryId(1);
		inventory.setInventoryUnits(25);
		ResponseEntity<Inventory> postResponse = restTemplate.postForEntity(getRootUrl() + "/addInventory", inventory, Inventory.class);
		assertNotNull(postResponse);
		assertNotNull(postResponse.getBody());
	}

	@Test
	public void testUpdateEmployee() {
		int id = 1;
		Staff employee = restTemplate.getForObject(getRootUrl() + "/editStaff/" + id, Staff.class);
		employee.setStaffName("admin1");
		employee.setStaffDepartment("ex2");
		employee.setStaffGender("mal");
		employee.setStaffContact("98665346");
		employee.setStaffMailId("jsd@dj.com");
		restTemplate.put(getRootUrl() + "/editStaff/" + id, employee);
		Staff updatedEmployee = restTemplate.getForObject(getRootUrl() + "/editStaff/" + id, Staff.class);
		assertNotNull(updatedEmployee);
	}

	@Test
	public void testUpdateRoom() {
		int id = 1;
		Room room = restTemplate.getForObject(getRootUrl() + "/editRoom/" + id, Room.class);
		room.setRoomType("admin1");
		room.setRoomStatus("ex2");
		room.setRoomPrice(900);
		room.setRoomNumber(546);
		restTemplate.put(getRootUrl() + "/editRoom/" + id, room);
		Room updatedRoom = restTemplate.getForObject(getRootUrl() + "/editRoom/" + id, Room.class);
		assertNotNull(updatedRoom);
	}
	@Test
	public void testUpdateInventory() {
		int id = 1;
		Inventory inventory = restTemplate.getForObject(getRootUrl() + "/editInventory/" + id, Inventory.class);
		inventory.setInventoryName("admin1");
		inventory.setInventoryUnits(50);
		restTemplate.put(getRootUrl() + "/editInventory/" + id, inventory);
		Inventory updatedInventory = restTemplate.getForObject(getRootUrl() + "/editInventory/" + id, Inventory.class);
		assertNotNull(updatedInventory);
	}

	@Test
	public void testGetEmployeeById() {
		Staff employee = restTemplate.getForObject(getRootUrl() + "/findStaff/1", Staff.class);
		System.out.println(employee.getStaffName());
		assertNotNull(employee);
	}

	@Test
	public void testGetRoomById() {
		Room room = restTemplate.getForObject(getRootUrl() + "/findRoom/1", Room.class);
		System.out.println(room.getRoomType());
		assertNotNull(room);
	}

	@Test
	public void testGetInventoryById() {
		Inventory inventory = restTemplate.getForObject(getRootUrl() + "/findInventory/1", Inventory.class);
		System.out.println(inventory.getInventoryName());
		assertNotNull(inventory);
	}

	@Test
	public void testGetAllEmployees() {
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, headers);
		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/findStaffs",
				HttpMethod.GET, entity, String.class);
		assertNotNull(response.getBody());
	}

	@Test
	public void testGetAllRooms() {
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, headers);
		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/findRooms",
				HttpMethod.GET, entity, String.class);
		assertNotNull(response.getBody());
	}

	@Test
	public void testGetAllInventory() {
		HttpHeaders headers = new HttpHeaders();
		HttpEntity<String> entity = new HttpEntity<String>(null, headers);
		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/findInventories",
				HttpMethod.GET, entity, String.class);
		assertNotNull(response.getBody());
	}

	@Test
	public void testDeleteEmployee() {
		int id = 1;
		Staff employee = restTemplate.getForObject(getRootUrl() + "/deleteStaff/" + id, Staff.class);
		assertNotNull(employee);
		restTemplate.delete(getRootUrl() + "/deleteStaff/" + id);
		try {
			employee = restTemplate.getForObject(getRootUrl() + "/deleteStaff/" + id, Staff.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}

	@Test
	public void testDeleteRoom() {
		int id = 1;
		Room room = restTemplate.getForObject(getRootUrl() + "/deleteRoom/" + id, Room.class);
		assertNotNull(room);
		restTemplate.delete(getRootUrl() + "/deleteRoom/" + id);
		try {
			room = restTemplate.getForObject(getRootUrl() + "/deleteRoom/" + id, Room.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}

	@Test
	public void testDeleteInventory() {
		int id = 1;
		Inventory inventory = restTemplate.getForObject(getRootUrl() + "/deleteInventory/" + id, Inventory.class);
		assertNotNull(inventory);
		restTemplate.delete(getRootUrl() + "/deleteInventory/" + id);
		try {
			inventory = restTemplate.getForObject(getRootUrl() + "/deleteInventory/" + id, Inventory.class);
		} catch (final HttpClientErrorException e) {
			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
		}
	}

}
