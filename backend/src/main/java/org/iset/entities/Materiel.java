package org.iset.entities;

import java.util.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

@Entity
public class Materiel {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_materiel;
	private String modele;
	private Date date_achat;
	private Date date_expiration_garantie;
	private String emplacement;
	private String nom_materiel;
	public Materiel(Long id_materiel, String modele, Date date_achat, Date date_expiration_garantie,
			String emplacement, String nom_materiel, Admin admin, Set<Technicien> techniciens) {
		super();
		this.id_materiel = id_materiel;
		this.modele = modele;
		this.date_achat = date_achat;
		this.date_expiration_garantie = date_expiration_garantie;
		this.emplacement = emplacement;
		this.nom_materiel = nom_materiel;
		this.admin = admin;
		this.techniciens = techniciens;
	}
	@ManyToOne
	private Admin admin;
	
	@ManyToMany(mappedBy = "matériels")
	Set<Technicien> techniciens;


	public Materiel() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Materiel(Long id_materiel, String modele, Date date_achat, Date date_expiration_garantie,
			String emplacement) {
		super();
		this.id_materiel = id_materiel;
		this.modele = modele;
		this.date_achat = date_achat;
		this.date_expiration_garantie = date_expiration_garantie;
		this.emplacement = emplacement;
	}
	public Long getId_materiel() {
		return id_materiel;
	}
	public void setId_materiel(Long id_materiel) {
		this.id_materiel = id_materiel;
	}
	
	
	public String getModele() {
		return modele;
	}
	public void setModele(String modele) {
		this.modele = modele;
	}
	public Date getDate_achat() {
		return date_achat;
	}
	public void setDate_achat(Date date_achat) {
		this.date_achat = date_achat;
	}
	public Date getDate_expiration_garantie() {
		return date_expiration_garantie;
	}
	public void setDate_expiration_garantie(Date date_expiration_garantie) {
		this.date_expiration_garantie = date_expiration_garantie;
	}
	public String getEmplacement() {
		return emplacement;
	}
	public void setEmplacement(String emplacement) {
		this.emplacement = emplacement;
	}
	public Admin getAdmin() {
		return admin;
	}
	public void setAdmin(Admin admin) {
		this.admin = admin;
	}
	public Set<Technicien> getTechniciens() {
		return techniciens;
	}
	public void setTechniciens(Set<Technicien> techniciens) {
		this.techniciens = techniciens;
	}
	public String getNom_materiel() {
		return nom_materiel;
	}
	public void setNom_materiel(String nom_materiel) {
		this.nom_materiel = nom_materiel;
	}
	
}
