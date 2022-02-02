package org.iset.Controller;

import java.util.List;

import org.iset.Service.ProfesseurService;
import org.iset.Service.TechnicienService;
import org.iset.entities.Professeur;
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
public class ProfesseurController {
	@Autowired
	ProfesseurService professeurservice;
	
	
	public ProfesseurController(ProfesseurService professeurservice) {
		super();
		this.professeurservice = professeurservice;
	}
	@GetMapping("/professeur")
	@CrossOrigin(origins = "http://localhost:4200")

	public List<Professeur> getallProfesseur(){
		
		return (List<Professeur>) professeurservice.getAllProfesseur();
		
	}
	@PostMapping("/add-professeur")
	@CrossOrigin(origins = "http://localhost:4200")

	public Professeur addProfesseur(@RequestBody Professeur p)
	{
		return professeurservice.addProfesseur(p);
		}
	@GetMapping("/professeur/{id}")
	@CrossOrigin(origins = "http://localhost:4200")

	public Professeur getProf(@PathVariable Long id )
	{
		return professeurservice.getProf(id);}
	
	@DeleteMapping("/supprim-professeur/{id}")
	@CrossOrigin(origins = "http://localhost:4200")

	public void supprimProf(@PathVariable("id") Long id )
	{
		professeurservice.supprimProfesseur(id);
	}
	@PostMapping("/modif/professeur")
	@CrossOrigin(origins = "http://localhost:4200")

	public Professeur modifProfesseur(@RequestBody Professeur p )
	{
		return professeurservice.modifProf(p);}
}
