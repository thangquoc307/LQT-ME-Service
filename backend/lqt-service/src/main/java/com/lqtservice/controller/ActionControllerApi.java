package com.lqtservice.controller;

import com.lqtservice.dto.RequestDto;
import com.lqtservice.model.Request;
import com.lqtservice.service.impl.IRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/")
public class ActionControllerApi {
    @Autowired
    private IRequestService requestService;
    @DeleteMapping("request/{id}")
    public ResponseEntity<?> deleteRequest(@PathVariable Integer id){
        Request request = requestService.getRequestById(id);
        if (request == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            requestService.deleteRequest(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
    @PostMapping("request")
    public ResponseEntity<?> confirmRequest(@RequestBody RequestDto requestDto){
        Request request = requestService.getRequestById(requestDto.getId());
        if (request == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            requestService.confirmRequest(requestDto);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
    @PatchMapping("request/{id}")
    public ResponseEntity<?> doneRequest(@PathVariable Integer id){
        Request request = requestService.getRequestById(id);
        if (request == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            requestService.doneRequest(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }

}
