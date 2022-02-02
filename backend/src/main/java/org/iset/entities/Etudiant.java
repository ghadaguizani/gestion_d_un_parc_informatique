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
@Entity

public class Etudiant {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_etud;
	private String nom_etud;
	private String mail_etud;
	
	
	public Etudiant() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Etudiant(Long id_etud, String nom_etud, String mail_etud) {
		super();
		this.id_etud = id_etud;
		this.nom_etud = nom_etud;
		this.mail_etud = mail_etud;
	}
	public Long getId_etud() {
		return id_etud;
	}
	public void setId_etud(Long id_etud) {
		this.id_etud = id_etud;
	}
	public String getNom_etud() {
		return nom_etud;
	}
	public void setNom_etud(String nom_etud) {
		this.nom_etud = nom_etud;
	}
	public String getMail_etud() {
		return mail_etud;
	}
	public void setMail_etud(String mail_etud) {
		this.mail_etud = mail_etud;
	}
	
	
}
