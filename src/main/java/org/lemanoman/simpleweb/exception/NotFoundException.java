package org.lemanoman.simpleweb.exception;

public class NotFoundException extends RuntimeException {

    public NotFoundException() {
        super("Book not found");
    }

    public NotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}