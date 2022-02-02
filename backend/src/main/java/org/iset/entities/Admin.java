package org.iset.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany; 


@Entity
public class Admin {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_ad;
	private String nomad;
	private String email_ad;
	private String mot_de_passe;
	private int numero_ad;
	private String role;
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	@OneToMany(mappedBy="admin")
	private List<Technicien> techniciens;
	@OneToMany(mappedBy="admin")
	private List<Logiciel> logiciels;
	@OneToMany(mappedBy="admin")
	private List<Matériel> matériels;
	@OneToMany(mappedBy="admin")
	private List<Fournisseur> fournisseurs;
	public Admin() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Long getId_ad() {
		return id_ad;
	}
	public void setId_ad(Long id_ad) {
		this.id_ad = id_ad;
	}
	public String getNomad() {
		return nomad;
	}
	public void setNomad(String nomad) {
		this.nomad = nomad;
	}
	public String getEmail_ad() {
		return email_ad;
	}
	public void setEmail_ad(String email_ad) {
		this.email_ad = email_ad;
	}
	public String getMot_de_passe() {
		return mot_de_passe;
	}
	public void setMot_de_passe(String mot_de_passe) {
		this.mot_de_passe = mot_de_passe;
	}
	public int getNumero_ad() {
		return numero_ad;
	}
	public void setNumero_ad(int numero_ad) {
		this.numero_ad = numero_ad;
	}
	
	public List<Technicien> getTechniciens() {
		return techniciens;
	}
	public void setTechniciens(List<Technicien> techniciens) {
		this.techniciens = techniciens;
	}
	public List<Logiciel> getLogiciels() {
		return logiciels;
	}
	public void setLogiciels(List<Logiciel> logiciels) {
		this.logiciels = logiciels;
	}
	public List<Matériel> getMatériels() {
		return matériels;
	}
	public void setMatériels(List<Matériel> matériels) {
		this.matériels = matériels;
	}
	public List<Fournisseur> getFournisseurs() {
		return fournisseurs;
	}
	public void setFournisseurs(List<Fournisseur> fournisseurs) {
		this.fournisseurs = fournisseurs;
	}
	public Admin(Long id_ad, String nomad, String email_ad, String mot_de_passe, int numero_ad, 
			List<Technicien> techniciens, List<Logiciel> logiciels, List<Matériel> matériels,
			List<Fournisseur> fournisseurs) {
		super();
		this.id_ad = id_ad;
		this.nomad = nomad;
		this.email_ad = email_ad;
		this.mot_de_passe = mot_de_passe;
		this.numero_ad = numero_ad;
		this.techniciens = techniciens;
		this.logiciels = logiciels;
		this.matériels = matériels;
		this.fournisseurs = fournisseurs;
	}
	public Admin(Long id_ad, String nomad, String email_ad, String mot_de_passe, int numero_ad, String role,
			List<Technicien> techniciens, List<Logiciel> logiciels, List<Matériel> matériels,
			List<Fournisseur> fournisseurs) {
		super();
		this.id_ad = id_ad;
		this.nomad = nomad;
		this.email_ad = email_ad;
		this.mot_de_passe = mot_de_passe;
		this.numero_ad = numero_ad;
		this.role = role;
		this.techniciens = techniciens;
		this.logiciels = logiciels;
		this.matériels = matériels;
		this.fournisseurs = fournisseurs;
	}
	

}
