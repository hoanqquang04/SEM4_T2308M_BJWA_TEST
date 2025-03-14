package com.example.demo_test.entities;

import jakarta.persistence.*;
import lombok.Data;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.Date;

@Entity
@Data
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long projectId;

    private String projectName;
    private Date startDate;
    private Date endDate;

    @ManyToOne
    @JoinColumn(name = "manager_id", nullable = false)
    @JsonIgnoreProperties("projects") 
    private Employee manager;
}
