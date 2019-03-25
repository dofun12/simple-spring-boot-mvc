package org.lemanoman.simpleweb.repo;

import org.lemanoman.simpleweb.model.Book;
import org.lemanoman.simpleweb.model.Tarefa;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TarefaRepository extends CrudRepository<Tarefa, Long> {

}