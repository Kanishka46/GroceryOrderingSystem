package com.examly.springapp.service;

import com.examly.springapp.model.*;
import com.examly.springapp.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    private final OrderRepository orderRepository;
    private final ProductRepository productRepository;
    private final OrderItemRepository orderItemRepository;

    @Autowired
    public OrderService(OrderRepository orderRepository, ProductRepository productRepository, OrderItemRepository orderItemRepository) {
        this.orderRepository = orderRepository;
        this.productRepository = productRepository;
        this.orderItemRepository = orderItemRepository;
    }

    @Transactional
    public Order createOrder(Order order) {
        double total = 0.0;
        // Validate orderItems and stock
        for (OrderItem item : order.getOrderItems()) {
            Product product = productRepository.findById(item.getProduct().getId())
                .orElseThrow(() -> new RuntimeException("Product not found: " + item.getProduct().getId()));
            if (item.getQuantity() <= 0) {
                throw new RuntimeException("Quantity must be positive for product: " + product.getName());
            }
            if (item.getQuantity() > product.getStockQuantity()) {
                throw new RuntimeException("Ordered quantity exceeds available stock for product: " + product.getName());
            }
            item.setSubtotal(product.getPrice() * item.getQuantity());
            total += item.getSubtotal();

            item.setProduct(product);
            item.setOrder(order);
        }
        order.setOrderDate(LocalDateTime.now());
        order.setTotalAmount(total);
        order.setStatus("PENDING");
        // Save order, then items
        Order savedOrder = orderRepository.save(order);
        for (OrderItem item : order.getOrderItems()) {
           // Product product = productRepository.findById(item.getProduct().getId()).get();
           Product product=item.getProduct();
            product.setStockQuantity(product.getStockQuantity() - item.getQuantity());
            productRepository.save(product);
            // item.setOrder(savedOrder);
            // orderItemRepository.save(item);
        }
       // savedOrder.setOrderItems(order.getOrderItems());
        return savedOrder;
    }

    public Optional<Order> getOrderById(Long id) {
        return orderRepository.findById(id);
    }
    

// inside OrderService class:

    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

    @Transactional
    public Order updateOrder(Long id, Order updatedOrder) {
        Order existingOrder = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        // Update only allowed fields:
        existingOrder.setCustomerName(updatedOrder.getCustomerName());
        existingOrder.setCustomerEmail(updatedOrder.getCustomerEmail());
        existingOrder.setStatus(updatedOrder.getStatus());
        existingOrder.setTotalAmount(updatedOrder.getTotalAmount());
        // We are NOT changing orderItems or orderDate here, but you can if needed

        return orderRepository.save(existingOrder);
    }

    // A duplicate post-like method (does same thing as createOrder)
    @Transactional
    public Order createOrderAgain(Order order) {
        // reuse existing logic:
        return createOrder(order);
    }



}
// package com.examly.springapp.service;

// import com.examly.springapp.model.*;

// import com.examly.springapp.repository.*;

// import org.springframework.beans.factory.annotation.Autowired;

// import org.springframework.stereotype.Service;

// import org.springframework.transaction.annotation.Transactional;



// import java.time.LocalDateTime;

// import java.util.List;

// import java.util.Optional;



// @Service
// public class OrderService {

//     private final OrderRepository orderRepository;

//     private final ProductRepository productRepository;
//     private final OrderItemRepository orderItemRepository;
//     @Autowired
//     public OrderService(OrderRepository orderRepository, ProductRepository productRepository, OrderItemRepository orderItemRepository) {

//         this.orderRepository = orderRepository;

//         this.productRepository = productRepository;

//         this.orderItemRepository = orderItemRepository;

//     }
//     @Transactional
//     public Order createOrder(Order order) {

//         double total = 0.0;



//         // Validate orderItems and stock

//         for (OrderItem item : order.getOrderItems()) {

//             Product product = productRepository.findById(item.getProduct().getId())

//             .orElseThrow(() -> new RuntimeException("Product not found: " + item.getProduct().getId()));



//             if (item.getQuantity() <= 0) {

//                 throw new RuntimeException("Quantity must be positive for product: " + product.getName());

//             }

//             if (item.getQuantity() > product.getStockQuantity()) {

//                 throw new RuntimeException("Ordered quantity exceeds available stock for product: " + product.getName());

//             }



//             item.setSubtotal(product.getPrice() * item.getQuantity());

//             total += item.getSubtotal();



//             item.setProduct(product);

//             item.setOrder(order);

//         }



//         order.setOrderDate(LocalDateTime.now());

//         order.setTotalAmount(total);

//         order.setStatus("PENDING");



//         // Save order and update stock

//         Order savedOrder = orderRepository.save(order);



//         for (OrderItem item : order.getOrderItems()) {

//             Product product = item.getProduct();

//             product.setStockQuantity(product.getStockQuantity() - item.getQuantity());

//             productRepository.save(product);

//         }



//         return savedOrder;

//     }
//     public Optional<Order> getOrderById(Long id) {

//         return orderRepository.findById(id);

//     }
//     public List<Order> getAllOrders() {

//         return orderRepository.findAll();

//     }
//     @Transactional
//     public Order updateOrder(Long id, Order orderDetails) {

//         Order existingOrder = orderRepository.findById(id)
//         .orElseThrow(() -> new RuntimeException("Order not found with id: " + id));



//         // only update editable fields

//         if (orderDetails.getCustomerName() != null)

//         existingOrder.setCustomerName(orderDetails.getCustomerName());



//         if (orderDetails.getCustomerEmail() != null)

//         existingOrder.setCustomerEmail(orderDetails.getCustomerEmail());



//         if (orderDetails.getStatus() != null)

//         existingOrder.setStatus(orderDetails.getStatus());



//         return orderRepository.save(existingOrder);

//     }



//     @Transactional
//     public void deleteOrder(Long id) {

//         Order existingOrder = orderRepository.findById(id)
//         .orElseThrow(() -> new RuntimeException("Order not found with id: " + id));

//         orderRepository.delete(existingOrder);

//     }

// }
    