package org.iset.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.sql.Date;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Demande {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
private Long idD;
private Date dateDemande;
private String demandeur;
private String machine;
private String salle;
private String description;
//departement
public Demande() {
	super();
	// TODO Auto-generated constructor stub
}

public Demande(Long idD, Date dateDemande, String demandeur, String machine, String salle, String description) {
	super();
	this.idD = idD;
	this.dateDemande = dateDemande;
	this.demandeur = demandeur;
	this.machine = machine;
	this.salle = salle;
	this.description = description;
}
public Long getIdD() {
	return idD;
}
public void setIdD(Long idD) {
	this.idD = idD;
}
public Date getDateDemande() {
	return dateDemande;
}
public void setDateDemande(Date dateDemande) {
	this.dateDemande = dateDemande;
}
public String getDemandeur() {
	return demandeur;
}
public void setDemandeur(String demandeur) {
	this.demandeur = demandeur;
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
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}



}
