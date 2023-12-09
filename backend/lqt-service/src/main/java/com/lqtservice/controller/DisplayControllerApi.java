package com.lqtservice.controller;

import com.lqtservice.model.Customer;
import com.lqtservice.model.Employee;
import com.lqtservice.model.Request;
import com.lqtservice.model.Room;
import com.lqtservice.service.impl.ICustomerService;
import com.lqtservice.service.impl.IEmployeeService;
import com.lqtservice.service.impl.IRequestService;
import com.lqtservice.service.impl.IRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/")

public class DisplayControllerApi {
    @Autowired
    private IRoomService roomService;
    @Autowired
    private IRequestService requestService;
    @Autowired
    private IEmployeeService employeeService;
    @Autowired
    private ICustomerService customerService;
    @GetMapping("all_room")
    public ResponseEntity<List<Room>> getAllRoom(){
        List<Room> roomList = roomService.getAllRoom();
        if (roomList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(roomList, HttpStatus.OK);
        }
    }
    @GetMapping("levelroom/{level}")
    public ResponseEntity<List<Room>> getRoomByLevel(@PathVariable Integer level){
        List<Room> roomList = roomService.getRoomByLevel(level);
        if (roomList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(roomList, HttpStatus.OK);
        }
    }
    @GetMapping("schedule/{month}/{year}")
    public ResponseEntity<Map<String, List<Request>>> getRequestByMonthYear(
            @PathVariable Integer month, @PathVariable Integer year){
        List<Request> requests = requestService.getAllRequestByMonthYear(month, year);
        Map<String, List<Request>> result = new HashMap<>();
        for (Request request : requests) {
            String day = request.getTimeOrder().getDayOfMonth() + "";
            if (result.containsKey(day)){
                result.get(day).add(request);
            } else {
                List<Request> requestList = new ArrayList<>();
                requestList.add(request);
                result.put(day, requestList);
            }
        }
        if (requests.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }
    @GetMapping("request")
    public ResponseEntity<List<Request>> getRequestHolding(){
        List<Request> requests = requestService.getAllRequestHolding();
        if (requests.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(requests, HttpStatus.OK);
        }
    }
    @GetMapping("request/{room}")
    public ResponseEntity<List<Request>> getRequestHolding(
            @PathVariable String room){
        List<Request> requests = requestService.getRequestByRoom(room);
        if (requests.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(requests, HttpStatus.OK);
        }
    }
    @GetMapping("employee")
    public ResponseEntity<List<Employee>> getAllEmployee(){
        List<Employee> employees = employeeService.getAllEmployee();
        if (employees.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(employees, HttpStatus.OK);
        }
    }
    @GetMapping("customer/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Integer id){
        Customer customer = customerService.getCustomerById(id);
        if (customer == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(customer, HttpStatus.OK);
        }
    }
}
