package com.lqtservice.repository;

import com.lqtservice.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IRoomsRepository extends JpaRepository<Room, Integer> {
    @Query(nativeQuery = true,
            value = "select * from rooms " +
                    "where is_deleted = 0")
    List<Room> getAllRoom();
    @Query(nativeQuery = true,
            value = "select * from rooms " +
                    "where is_deleted = 0 " +
                    "and customer_id = :id")
    List<Room> getRoomBelongCustomerId(@Param("id") Integer id);
    @Query(nativeQuery = true,
            value = "select * from rooms " +
                    "where is_deleted = 0 " +
                    "and level = :level")
    List<Room> getRoomByLevel(@Param("level") Integer level);
    @Query(nativeQuery = true,
            value = "select * from rooms " +
                    "where is_deleted = 0 " +
                    "and name = :name")
    Room getRoomByName(@Param("name") String name);
}
