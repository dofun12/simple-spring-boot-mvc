package org.lemanoman.simpleweb.exception;

public class BookNotFoundException extends RuntimeException {

    public BookNotFoundException() {
        super("Book not found");
    }

    public BookNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}