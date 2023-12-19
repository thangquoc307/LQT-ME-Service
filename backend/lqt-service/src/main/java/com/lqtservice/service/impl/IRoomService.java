package com.lqtservice.service.impl;

import com.lqtservice.model.Room;

import java.util.List;

public interface IRoomService {
    List<Room> getAllRoom();
    List<Room> getRoomByUserId(Integer customerId);
    List<Room> getRoomByLevel(Integer level);
    Room getRoomByName(String name);
}
