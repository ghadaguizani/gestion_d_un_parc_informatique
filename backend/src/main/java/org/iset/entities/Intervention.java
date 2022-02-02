package org.iset.entities;

import java.sql.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Intervention {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_inter;
	private Date date_inter;
	private String description;
	private String machine;
	private String salle;
	@ManyToMany(mappedBy = "interventions")
	Set<Technicien> techniciens;
	
	

	public Intervention() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Intervention(Long id_inter, Date date_inter, String description, String machine, String salle,
			Set<Technicien> techniciens) {
		super();
		this.id_inter = id_inter;
		this.date_inter = date_inter;
		this.description = description;
		this.machine = machine;
		this.salle = salle;
		this.techniciens = techniciens;
	}



	public Long getId_inter() {
		return id_inter;
	}



	public void setId_inter(Long id_inter) {
		this.id_inter = id_inter;
	}



	public Date getDate_inter() {
		return date_inter;
	}



	public void setDate_inter(Date date_inter) {
		this.date_inter = date_inter;
	}



	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public String getMachine() {
		return machine;
	}



	public void setMachine(String machine) {
		this.machine = machine;
	}



	public String getSalle() {
		return salle;
	}



	public void setSalle(String salle) {
		this.salle = salle;
	}



	public Set<Technicien> getTechniciens() {
		return techniciens;
	}



	public void setTechniciens(Set<Technicien> techniciens) {
		this.techniciens = techniciens;
	}
	
}
