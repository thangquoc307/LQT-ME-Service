package com.lqtservice.controller;

import com.lqtservice.dto.FeedbackDto;
import com.lqtservice.dto.RequestDto;
import com.lqtservice.dto.RequestEditDto;
import com.lqtservice.model.Feedback;
import com.lqtservice.model.Request;
import com.lqtservice.model.Room;
import com.lqtservice.service.impl.IFeedbackService;
import com.lqtservice.service.impl.IRequestService;
import com.lqtservice.service.impl.IRoomService;
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
    @Autowired
    private IFeedbackService feedbackService;
    @Autowired
    private IRoomService roomService;
    @DeleteMapping("admin/request/{id}")
    public ResponseEntity<?> deleteRequest(@PathVariable Integer id){
        Request request = requestService.getRequestById(id);
        if (request == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            requestService.deleteRequest(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
    @PostMapping("admin/request")
    public ResponseEntity<?> confirmRequest(@RequestBody RequestDto requestDto){
        Request request = requestService.getRequestById(requestDto.getId());
        if (request == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            requestService.confirmRequest(requestDto);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
    @PatchMapping("admin/request/{id}")
    public ResponseEntity<?> doneRequest(@PathVariable Integer id){
        Request request = requestService.getRequestById(id);
        if (request == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            requestService.doneRequest(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
    @PatchMapping("employee/request/{id}")
    public ResponseEntity<?> doneRequestEmployee(@PathVariable Integer id){
        Request request = requestService.getRequestById(id);
        if (request == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            requestService.doneRequest(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
    @PostMapping("customer/feedback")
    public ResponseEntity<?> sendFeedback(@RequestBody FeedbackDto feedbackDto){
        if (feedbackDto != null) {
            Request request = requestService.getRequestById(feedbackDto.getRequestId());
            if (request != null) {
                Feedback feedback = new Feedback();
                feedback.setRequest(request);
                feedback.setComment(feedbackDto.getComment());
                feedback.setStar(feedbackDto.getStar());
                feedbackService.addFeedback(feedback);
                return new ResponseEntity<>(HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    @DeleteMapping("customer/request/{id}")
    public ResponseEntity<?> customerDeleteRequest(@PathVariable Integer id){
        Request request = requestService.getRequestById(id);
        if (request == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            requestService.deleteRequest(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
    @PatchMapping("customer/request")
    public ResponseEntity<?> customerEditRequest(@RequestBody RequestEditDto requestEditDto){
        Request request = requestService.getRequestById(requestEditDto.getId());
        if (request == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            requestService.editRequest(requestEditDto);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
    @PostMapping("customer/request")
    public ResponseEntity<?> customerCreateRequest(@RequestBody RequestEditDto requestEditDto){
        Request request = requestService.getRequestById(requestEditDto.getId());
        Room room = roomService.getRoomByName(requestEditDto.getRoom());
        if (request == null || room == null){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        } else {
            requestService.createRequest(requestEditDto, room.getId());
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }
}
