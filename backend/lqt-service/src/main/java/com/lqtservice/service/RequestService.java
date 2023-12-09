package com.lqtservice.service;

import com.lqtservice.dto.RequestDto;
import com.lqtservice.model.Request;
import com.lqtservice.repository.IRequestRepository;
import com.lqtservice.service.impl.IRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
