package com.examly.springapp.model;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "orders")
public class Order {
       @Id
       @GeneratedValue(strategy = GenerationType.IDENTITY)
       private Long id;
       @NotNull
       private String customerName;

       @NotNull
       @Email
       private String customerEmail;
       //@NotNull
       private LocalDateTime orderDate;
       //@NotNull
       //@Positive
       private Double totalAmount;
       //@NotNull
       private String status; // e.g., PENDING, COMPLETED, CANCELLED
       @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.EAGER)
       private List<OrderItem> orderItems = new ArrayList<>();
       
       public Long getId() {
           return id;
       }
       public void setId(Long id) {
           this.id = id;
       }
       public String getCustomerName() {
           return customerName;
       }
       public void setCustomerName(String customerName) {
           this.customerName = customerName;
       }
       public String getCustomerEmail() {
           return customerEmail;
       }
       public void setCustomerEmail(String customerEmail) {
           this.customerEmail = customerEmail;
       }
       public LocalDateTime getOrderDate() {
           return orderDate;
       }
       public void setOrderDate(LocalDateTime orderDate) {
           this.orderDate = orderDate;
       }
       public Double getTotalAmount() {
           return totalAmount;
       }
       public void setTotalAmount(Double totalAmount) {
           this.totalAmount = totalAmount;
       }
       public String getStatus() {
           return status;
       }
       public void setStatus(String status) {
           this.status = status;
       }
       public List<OrderItem> getOrderItems() {
           return orderItems;
       }
       public void setOrderItems(List<OrderItem> orderItems) {
           this.orderItems = orderItems;
       }

}
           






                   



                            




                                            




                                                     



                                                          
                                                               



                                                                   
                                                                        


                                                                           