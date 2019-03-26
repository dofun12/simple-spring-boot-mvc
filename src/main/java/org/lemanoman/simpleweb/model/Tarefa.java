package org.lemanoman.simpleweb.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Tarefa {


    /**
     * data.addColumn('string', 'Task ID');
     *         data.addColumn('string', 'Task Name');
     *         data.addColumn('string', 'Resource');
     *         data.addColumn('date', 'Start Date');
     *         data.addColumn('date', 'End Date');
     *         data.addColumn('number', 'Duration');
     *         data.addColumn('number', 'Percent Complete');
     *         data.addColumn('string', 'Dependencies');
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
 
    @Column(nullable = false)
    private String taskName;

    @Column(nullable = false)
    private Date dateStart;

    @Column
    private Date dateEnd;

    @Column(nullable = false)
    private Date datePreview;

    @Column(nullable = false)
    private Float percentComplete;

    @Column(nullable = false)
    private Float duration;

    @Column
    private String dependencies;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public Date getDateStart() {
        return dateStart;
    }

    public void setDateStart(Date dateStart) {
        this.dateStart = dateStart;
    }

    public Date getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(Date dateEnd) {
        this.dateEnd = dateEnd;
    }

    public Float getDuration() {
        return duration;
    }

    public void setDuration(Float duration) {
        this.duration = duration;
    }

    public String getDependencies() {
        return dependencies;
    }

    public void setDependencies(String dependencies) {
        this.dependencies = dependencies;
    }

    public Float getPercentComplete() {
        return percentComplete;
    }

    public void setPercentComplete(Float percentComplete) {
        this.percentComplete = percentComplete;
    }

    public Date getDatePreview() {
        return datePreview;
    }

    public void setDatePreview(Date datePreview) {
        this.datePreview = datePreview;
    }
}