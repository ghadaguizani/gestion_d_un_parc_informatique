package org.iset.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Logiciel {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_logiciel;
	private String nom_logiciel;
	private Date date_installation;
	private String version_installee;
	private String dernieres_mises_a_jours;
	@ManyToOne
	private Admin admin;
	public Logiciel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Logiciel(Long id_logiciel, Date date_installation, String version_installee,
			String dernieres_mises_a_jours) {
		super();
		this.id_logiciel = id_logiciel;
		this.date_installation = date_installation;
		this.version_installee = version_installee;
		this.dernieres_mises_a_jours = dernieres_mises_a_jours;
	}
	public Long getId_logiciel() {
		return id_logiciel;
	}
	public void setId_logiciel(Long id_logiciel) {
		this.id_logiciel = id_logiciel;
	}
	public Date getDate_installation() {
		return date_installation;
	}
	public void setDate_installation(Date date_installation) {
		this.date_installation = date_installation;
	}
	public String getVersion_installee() {
		return version_installee;
	}
	public void setVersion_installee(String version_installee) {
		this.version_installee = version_installee;
	}
	public String getDernieres_mises_a_jours() {
		return dernieres_mises_a_jours;
	}
	public void setDernieres_mises_a_jours(String dernieres_mises_a_jours) {
		this.dernieres_mises_a_jours = dernieres_mises_a_jours;
	}
	public Admin getAdmin() {
		return admin;
	}
	public void setAdmin(Admin admin) {
		this.admin = admin;
	}
	
	public Logiciel(Long id_logiciel, String nom_logiciel, Date date_installation, String version_installee,
			String dernieres_mises_a_jours, Admin admin) {
		super();
		this.id_logiciel = id_logiciel;
		this.nom_logiciel = nom_logiciel;
		this.date_installation = date_installation;
		this.version_installee = version_installee;
		this.dernieres_mises_a_jours = dernieres_mises_a_jours;
		this.admin = admin;
	}
	public String getNom_logiciel() {
		return nom_logiciel;
	}
	public void setNom_logiciel(String nom_logiciel) {
		this.nom_logiciel = nom_logiciel;
	}
	
	

}
