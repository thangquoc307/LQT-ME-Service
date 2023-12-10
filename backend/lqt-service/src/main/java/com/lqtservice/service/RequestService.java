package com.lqtservice.service;

import com.lqtservice.dto.IRequestLevelDto;
import com.lqtservice.dto.RequestDto;
import com.lqtservice.dto.IRequestStatisticsDto;
import com.lqtservice.dto.RequestStatisticsDto;
import com.lqtservice.model.Request;
import com.lqtservice.repository.IRequestRepository;
import com.lqtservice.service.impl.IRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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
}
