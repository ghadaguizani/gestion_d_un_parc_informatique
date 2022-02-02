package org.iset.Controller;

import java.util.List;

import org.iset.Service.EtudiantService;
import org.iset.entities.Admin;
import org.iset.entities.Etudiant;
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
public class EtudiantController {
@Autowired
EtudiantService etudiantservice;

public EtudiantController(EtudiantService etudiantservice) {
	super();
	this.etudiantservice = etudiantservice;
}
@GetMapping("/etudiant")
@CrossOrigin(origins = "http://localhost:4200")

public List<Etudiant> getallEtudiant(){
	
	return (List<Etudiant>) etudiantservice.getAllEtudiant();
	
}
@PostMapping("/add-etudiant")
@CrossOrigin(origins = "http://localhost:4200")

public Etudiant addEtudiant(@RequestBody Etudiant e)
{
	return etudiantservice.addEtudiant(e);
	}
@GetMapping("/etudiant/{id}")
@CrossOrigin(origins = "http://localhost:4200")

public Etudiant getEtud(@PathVariable Long id )
{
	return etudiantservice.getEtud(id);}
@DeleteMapping("/supprim-etudiant/{id}")
@CrossOrigin(origins = "http://localhost:4200")

public void supprimEtud(@PathVariable("id") Long id)
{
	etudiantservice.supprimEtudiant(id);
}
@PostMapping("/modif-etudiant")
@CrossOrigin(origins = "http://localhost:4200")

public Etudiant modifAdmin(@RequestBody Etudiant e )
{
	return etudiantservice.modifEtud(e);}
}


