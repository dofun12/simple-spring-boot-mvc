package org.lemanoman.simpleweb.exception;

public class BookIdMismatchException extends RuntimeException {

    public BookIdMismatchException() {
        super("Id not found");
    }
}