package org.iset.entities;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;
import org.springframework.beans.factory.annotation.Autowired;

@Entity
public class Technicien {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id_technicien;
	private String nom_technicen;
	private int num_technicien;
	private String mdp;
	@ManyToOne
	private Admin admin;
	
	@Autowired
	@ManyToMany
	@JoinTable(
			name="tech_mater",
			joinColumns=@JoinColumn(name="id_technicien"),
			inverseJoinColumns=@JoinColumn(name="id_matériel")
			)
	private List<Matériel> matériels=new ArrayList();
	
	@ManyToMany
	@JoinTable(
			name="tech_inter",
			joinColumns=@JoinColumn(name="id_technicien"),
			inverseJoinColumns=@JoinColumn(name="id_inter")
			)
	private List<Intervention> interventions=new ArrayList();
	
	public Technicien() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Technicien(Long id_technicien, String nom_technicen, int num_technicien) {
		super();
		this.id_technicien = id_technicien;
		this.nom_technicen = nom_technicen;
		this.num_technicien = num_technicien;
	}
	public Long getId_technicien() {
		return id_technicien;
	}
	public void setId_technicien(Long id_technicien) {
		this.id_technicien = id_technicien;
	}
	public String getNom_technicen() {
		return nom_technicen;
	}
	public void setNom_technicen(String nom_technicen) {
		this.nom_technicen = nom_technicen;
	}
	public int getNum_technicien() {
		return num_technicien;
	}
	public void setNum_technicien(int num_technicien) {
		this.num_technicien = num_technicien;
	}
	public Admin getAdmin() {
		return admin;
	}
	public void setAdmin(Admin admin) {
		this.admin = admin;
	}
	public List<Matériel> getMatériels() {
		return matériels;
	}
	public void setMatériels(List<Matériel> matériels) {
		this.matériels = matériels;
	}
	public List<Intervention> getInterventions() {
		return interventions;
	}
	public void setInterventions(List<Intervention> interventions) {
		this.interventions = interventions;
	}
	public String getMdp() {
		return mdp;
	}
	public void setMdp(String mdp) {
		this.mdp = mdp;
	}
	public Technicien(Long id_technicien, String nom_technicen, int num_technicien, String mdp, Admin admin,
			List<Matériel> matériels, List<Intervention> interventions) {
		super();
		this.id_technicien = id_technicien;
		this.nom_technicen = nom_technicen;
		this.num_technicien = num_technicien;
		this.mdp = mdp;
		this.admin = admin;
		this.matériels = matériels;
		this.interventions = interventions;
	}
	
	
	
}
