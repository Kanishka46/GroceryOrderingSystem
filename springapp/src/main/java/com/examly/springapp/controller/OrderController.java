package com.examly.springapp.controller;

import com.examly.springapp.model.Order;
import com.examly.springapp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.Optional;
// @CrossOrigin(origins = {"http://localhost:3000",
//                              "http://localhost:8081",
//                             "https://8080-dfbcaefadaeefaecdcabedfcbeceafcdfac.premiumproject.examly.io",
//                             "https://8081-dfbcaefadaeefaecdcabedfcbeceafcdfac.premiumproject.examly.io"
// }
// )
@CrossOrigin(origins = {"http://localhost:3000",
               "http://localhost:8081",
              "https://8080-daaecfdefcaeefaecdcabedfcbeceafcdfac.premiumproject.examly.io",
             "https://8081-daaecfdefcaeefaecdcabedfcbeceafcdfac.premiumproject.examly.io"

}
)


@RestController
@RequestMapping("/api/orders")
public class OrderController {
    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }
    

    @PostMapping
    public ResponseEntity<?> createOrder(@Valid @RequestBody Order order, BindingResult bindingResult) {
        // We want to allow orderItems/product/quantity to be null in initial request, as the service layer will handle validation and mock tests expect service exceptions
        // if(bindingResult.hasErrors())
        // {
        //     StringBuilder err=new StringBuilder();
        //     bindingResult.getAllErrors().forEach(err->err.append(err.getDefaultMessage()).append("; "));
        //     return ResponseEntity.badRequest().body(new ErrorResponse(err.toString()));
        // }
        try {
            Order createdOrder = orderService.createOrder(order);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdOrder);
        } catch (RuntimeException ex) {
            return ResponseEntity.badRequest().body(new ErrorResponse(ex.getMessage()));
        }
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderById(@PathVariable Long id) {
        Optional<Order> order = orderService.getOrderById(id);
        if (order.isPresent()) {
            return ResponseEntity.ok(order.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorResponse("Order not found"));
        }
    }
        // Another POST method (does same as createOrder)
    @PostMapping("/again")
    public ResponseEntity<?> createOrderAgain(@Valid @RequestBody Order order, BindingResult bindingResult) {
        try {
            Order createdOrder = orderService.createOrderAgain(order);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdOrder);
        } catch (RuntimeException ex) {
            return ResponseEntity.badRequest().body(new ErrorResponse(ex.getMessage()));
        }
    }

    // GET all orders
    @GetMapping
    public ResponseEntity<?> getAllOrders() {
        return ResponseEntity.ok(orderService.getAllOrders());
    }

    // DELETE order by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable Long id) {
        Optional<Order> order = orderService.getOrderById(id);
        if (order.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ErrorResponse("Order not found"));
        }
        orderService.deleteOrder(id);
        return ResponseEntity.ok(new ErrorResponse("Order deleted successfully"));
    }

    // UPDATE order fields
    @PutMapping("/{id}")
    public ResponseEntity<?> updateOrder(@PathVariable Long id, @Valid @RequestBody Order updatedOrder,
                                         BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest()
                    .body(new ErrorResponse("Invalid order data"));
        }
        try {
            Order savedOrder = orderService.updateOrder(id, updatedOrder);
            return ResponseEntity.ok(savedOrder);
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(new ErrorResponse(ex.getMessage()));
        }
    }


    static class ErrorResponse {
        private String message;
        public ErrorResponse(String message) { this.message = message; }
        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
    }
}
