package com.example.studentDetailsBackEnd.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "table_details")
public class TableDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tableID;

    @Column(nullable = false, unique = true)
    private String tableName;
}
