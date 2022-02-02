package org.iset.Controller;

import java.util.List;

import org.iset.Service.MaterielService;
import org.iset.Service.ProfesseurService;
import org.iset.entities.Materiel;
import org.iset.entities.Professeur;
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
public class MaterielController {
	@Autowired
	MaterielService materielservice;
	
	
	public MaterielController(MaterielService materielservice) {
		super();
		this.materielservice = materielservice;
	}
	@GetMapping("/materiel")
	@CrossOrigin(origins = "http://localhost:4200")

	public List<Materiel> getallMateriel(){
		
		return (List<Materiel>) materielservice.getAllMateriel() ;
		
	}
	@PostMapping("/add-materiel")
	@CrossOrigin(origins = "http://localhost:4200")

	public Materiel addMateriel(@RequestBody Materiel m)
	{
		return materielservice.addMateriel(m);
		}
	@GetMapping("/materiel/{id}")
	@CrossOrigin(origins = "http://localhost:4200")

	public Materiel getMat(@PathVariable Long id )
	{
		return materielservice.getMat(id);}
	
	@DeleteMapping("/supprim-materiel/{id}")
	@CrossOrigin(origins = "http://localhost:4200")

	public void supprimMat(@PathVariable("id") Long id )
	{
		materielservice.supprimMateriel(id);
	}
	@PostMapping("modif/materiel")
	@CrossOrigin(origins = "http://localhost:4200")

	public Materiel modifMateriel(@RequestBody Materiel m )
	{
		return materielservice.modifMat(m);}
}
