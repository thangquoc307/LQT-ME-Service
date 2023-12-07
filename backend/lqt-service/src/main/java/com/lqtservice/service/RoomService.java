package com.lqtservice.service;

import com.lqtservice.model.Room;
import com.lqtservice.repository.IRoomsRepository;
import com.lqtservice.service.impl.IRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomService implements IRoomService {

    @Autowired
    private IRoomsRepository roomsRepository;
    @Override
    public List<Room> getAllRoom() {
        return roomsRepository.getAllRoom();
    }

    @Override
    public List<Room> getRoomByUserId(Integer customerId) {
        return roomsRepository.getRoomBelongCustomerId(customerId);
    }

    @Override
    public List<Room> getRoomByLevel(Integer level) {
        return roomsRepository.getRoomByLevel(level);
    }
}
