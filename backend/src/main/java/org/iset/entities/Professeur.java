package org.iset.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
@Entity
public class Professeur {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_prof;
	private String nom_prof;
	private String mail_prof;
	
	
	public Professeur() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Professeur(Long id_prof, String nom_prof, String mail_prof) {
		super();
		this.id_prof = id_prof;
		this.nom_prof = nom_prof;
		this.mail_prof = mail_prof;
	}
	public Long getId_prof() {
		return id_prof;
	}
	public void setId_prof(Long id_prof) {
		this.id_prof = id_prof;
	}
	public String getNom_prof() {
		return nom_prof;
	}
	public void setNom_prof(String nom_prof) {
		this.nom_prof = nom_prof;
	}
	public String getMail_prof() {
		return mail_prof;
	}
	public void setMail_prof(String mail_prof) {
		this.mail_prof = mail_prof;
	}
	
	
	
}
