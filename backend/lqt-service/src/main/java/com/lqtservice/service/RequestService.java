package com.lqtservice.service;

import com.lqtservice.dto.*;
import com.lqtservice.model.Request;
import com.lqtservice.repository.IRequestRepository;
import com.lqtservice.service.impl.IRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RequestService implements IRequestService {
    @Autowired
    private IRequestRepository requestRepository;

    @Override
    public List<Request> getAllRequestByMonthYear(Integer month, Integer year) {
        return requestRepository.getAllRequestByMonthYear(month, year);
    }

    @Override
    public List<Request> getAllRequestHolding() {
        return requestRepository.getAllRequestHolding();
    }

    @Override
    public void deleteRequest(Integer id) {
        requestRepository.deleteRequest(id);
    }

    @Override
    public Request getRequestById(Integer id) {
        return requestRepository.getRequestById(id);
    }

    @Override
    public void confirmRequest(RequestDto requestDto) {
        requestRepository.confirmRequest(requestDto.getId(), requestDto.getEmployeeId(), requestDto.getTimeOrder());
    }

    @Override
    public List<Request> getRequestByRoom(String room) {
        return requestRepository.getRequestByRoom(room);
    }

    @Override
    public void doneRequest(Integer id) {
        requestRepository.doneRequest(id);
    }

    @Override
    public void editRequest(RequestEditDto requestEditDto) {
        requestRepository.editRequest(
                requestEditDto.getId(),
                requestEditDto.getTimeOrder(),
                requestEditDto.getTimeRequest(),
                requestEditDto.getMess(),
                Integer.parseInt(requestEditDto.getRoom())
        );
    }

    @Override
    public Map<String, RequestStatisticsDto> getCountOfRequest() {
        Map<String, RequestStatisticsDto> result = new HashMap<>();

        List<IRequestStatisticsDto> requestStatisticsDtoList = requestRepository.getCountOfRequest();
        for (IRequestStatisticsDto data : requestStatisticsDtoList){
            String level = data.getLevel() + "";
            Integer count = data.getCount();
            String status = data.getStatus();

            RequestStatisticsDto request;
            if (result.containsKey(level)){
                request = result.get(level);
            } else {
                request = new RequestStatisticsDto();
            }

            if (status.equals("Đang chờ duyệt")){
                request.setRequest(request.getRequest() + count);
            } else if (status.equals("Đã đặt lịch")) {
                request.setHolding(request.getHolding() + count);
            }

            result.put(level, request);
        }
        return result;
    }

    @Override
    public Map<String, RequestStatisticsDto> getCountOfRequestByLevel(Integer level) {
        Map<String, RequestStatisticsDto> result = new HashMap<>();

        List<IRequestLevelDto> requestLevelDtoList = requestRepository.getCountOfRequestByLevel(level);
        for (IRequestLevelDto data : requestLevelDtoList){
            String room = data.getRoom();
            String status = data.getStatus();
            Integer count = data.getCount();

            RequestStatisticsDto request;
            if (result.containsKey(room)){
                request = result.get(room);
            } else {
                request = new RequestStatisticsDto();
            }

            if (status.equals("Đang chờ duyệt")){
                request.setRequest(request.getRequest() + count);
            } else if (status.equals("Đã đặt lịch")) {
                request.setHolding(request.getHolding() + count);
            }

            result.put(room, request);
        }

        return result;
    }

    @Override
    public List<Request> getRequestByCustomer(Integer customerid) {
        List<Request> holding = requestRepository.getHoldingRequestCustomer(customerid);
        List<Request> waiting = requestRepository.getWaitingRequestCustomer(customerid);
        List<Request> done = requestRepository.getDoneRequestCustomer(customerid);

        List<Request> list = new ArrayList<>();
        list.addAll(holding);
        list.addAll(waiting);
        list.addAll(done);

        return list;
    }

    @Override
    public Map<String, Integer> getRequestByMonthYearandCustomer(Integer id, Integer month, Integer year) {
        List<Request> list = requestRepository.getRequestByMonthYearandCustomer(id, month, year);
        Map<String, Integer> result = new HashMap<>();

        for (Request request : list) {
            String day = request.getTimeOrder().getDayOfMonth() + "";
            if (result.containsKey(day)){
                result.put(day, result.get(day) + 1);
            } else {
                result.put(day, 1);
            }
        }
        return result;
    }

    @Override
    public void createRequest(RequestEditDto requestEditDto, Integer roomId) {
        requestRepository.createRequest(
                requestEditDto.getTimeOrder(),
                requestEditDto.getTimeRequest(),
                requestEditDto.getId(),
                roomId,
                requestEditDto.getMess());
    }
}
