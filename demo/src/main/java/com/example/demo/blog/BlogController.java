package com.example.demo.blog;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
public class BlogController {
    private final PostRepository postRepository;

    @GetMapping("/posts")
    public List<PostEntity> getPosts() {
        return postRepository.findAll();
    }

    @GetMapping("/post/{id}")
    public PostEntity getPost(@PathVariable Long id) {
        return postRepository.findById(id).orElse(null);
    }
}