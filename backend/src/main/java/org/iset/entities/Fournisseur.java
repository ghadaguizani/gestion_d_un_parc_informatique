package org.iset.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity 
public class Fournisseur {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_fournisseur;
	private String nom_fournisseur;
	private int numero_fournisseur;
	@ManyToOne
	private Admin admin;

	public Fournisseur() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Fournisseur(Long id_fournisseur, String nom_fournisseur, int numero_fournisseur) {
		super();
		this.id_fournisseur = id_fournisseur;
		this.nom_fournisseur = nom_fournisseur;
		this.numero_fournisseur = numero_fournisseur;
	}
	public Long getId_fournisseur() {
		return id_fournisseur;
	}
	public void setId_fournisseur(Long id_fournisseur) {
		this.id_fournisseur = id_fournisseur;
	}
	public String getNom_fournisseur() {
		return nom_fournisseur;
	}
	public void setNom_fournisseur(String nom_fournisseur) {
		this.nom_fournisseur = nom_fournisseur;
	}
	public int getNumero_fournisseur() {
		return numero_fournisseur;
	}
	public void setNumero_fournisseur(int numero_fournisseur) {
		this.numero_fournisseur = numero_fournisseur;
	}
	

}
