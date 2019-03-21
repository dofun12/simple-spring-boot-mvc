package org.lemanoman.simpleweb;

public class TesteRunnable implements Runnable{
    private boolean run = true;
    private long timeout = 5000;

    @Override
    public void run() {
        while (isRun()){
            System.out.println("Estamos rodando felizes!");
            try {
                Thread.sleep(getTimeout());
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }

    }

    public boolean isRun() {
        return run;
    }

    public void setRun(boolean run) {
        this.run = run;
    }

    public long getTimeout() {
        return timeout;
    }

    public void setTimeout(long timeout) {
        this.timeout = timeout;
    }
}
