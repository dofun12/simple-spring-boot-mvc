package org.lemanoman.simpleweb.exception;

public class IdMismatchException extends RuntimeException {

    public IdMismatchException() {
        super("Id not found");
    }
}