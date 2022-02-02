package org.iset.Controller;

import java.util.List;

import org.iset.Service.FournisseurService;
import org.iset.Service.TechnicienService;
import org.iset.entities.Fournisseur;
import org.iset.entities.Technicien;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TechnicienController {
	@Autowired
	TechnicienService technicienservice;
	
	
	public TechnicienController(TechnicienService technicienservice) {
		super();
		this.technicienservice = technicienservice;
	}
	@GetMapping("/technicien")
	@CrossOrigin(origins = "http://localhost:4200")

	public List<Technicien> getallTechnicien(){
		
		return (List<Technicien>) technicienservice.getAllTechnicien();
		
	}
	@PostMapping("/add-technicien")
	@CrossOrigin(origins = "http://localhost:4200")

	public Technicien addTechnicien(@RequestBody Technicien t)
	{
		return technicienservice.addTechnicien(t);
		}
	@GetMapping("/technicien/{id}")
	@CrossOrigin(origins = "http://localhost:4200")

	public Technicien getTech(@PathVariable Long id )
	{
		return technicienservice.getTech(id);}
	
	@DeleteMapping("/supprim-technicien/{id}")
	@CrossOrigin(origins = "http://localhost:4200")

	public void supprimTech(@PathVariable("id") Long id )
	{
		technicienservice.supprimTechnicien(id);;
	}
	@PostMapping("modif/technicien")
	@CrossOrigin(origins = "http://localhost:4200")

	public Technicien modifTechnicien(@RequestBody Technicien t )
	{
		return technicienservice.modifTech(t);}
}
