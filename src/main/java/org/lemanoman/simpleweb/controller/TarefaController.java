package org.lemanoman.simpleweb.controller;

import org.lemanoman.simpleweb.exception.NotFoundException;

import org.lemanoman.simpleweb.exception.IdMismatchException;
import org.lemanoman.simpleweb.model.Tarefa;
import org.lemanoman.simpleweb.model.Tarefa;
import org.lemanoman.simpleweb.repo.TarefaRepository;
import org.lemanoman.simpleweb.repo.TarefaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tarefas")
public class TarefaController {

    @Autowired
    private TarefaRepository tarefaRepository;

    @GetMapping
    public Iterable findAll() {
        return tarefaRepository.findAll();
    }


    @GetMapping("/{id}")
    public Tarefa findOne(@PathVariable Long id) {
        return tarefaRepository.findById(id).orElseThrow(IdMismatchException::new);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Tarefa create(@RequestBody Tarefa book) {
        return tarefaRepository.save(book);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        tarefaRepository.findById(id)
                .orElseThrow(NotFoundException::new);
        tarefaRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public Tarefa updateTarefa(@RequestBody Tarefa tarefa, @PathVariable Long id) {
        if (tarefa.getId() != id) {
            throw new IdMismatchException();
        }
        tarefaRepository.findById(id)
                .orElseThrow(NotFoundException::new);
        return tarefaRepository.save(tarefa);
    }
}