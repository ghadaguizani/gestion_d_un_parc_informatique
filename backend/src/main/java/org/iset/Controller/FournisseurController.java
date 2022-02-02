package org.iset.Controller;

import java.util.List;

import org.iset.Service.EtudiantService;
import org.iset.Service.FournisseurService;
import org.iset.entities.Etudiant;
import org.iset.entities.Fournisseur;
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
public class FournisseurController {
	@Autowired
	FournisseurService fournisseurservice;
	
	public FournisseurController(FournisseurService fournisseurservice) {
		super();
		this.fournisseurservice = fournisseurservice;
	}
	@GetMapping("/fournisseur")
	@CrossOrigin(origins = "http://localhost:4200")

	public List<Fournisseur> getallFournisseur(){
		
		return (List<Fournisseur>) fournisseurservice.getAllFournisseur();
		
	}
	@PostMapping("/add-fournisseur")
	@CrossOrigin(origins = "http://localhost:4200")

	public Fournisseur addFournisseur(@RequestBody Fournisseur f)
	{
		return fournisseurservice.addFournisseur(f);
		}
	@GetMapping("/fournisseur/{id}")
	@CrossOrigin(origins = "http://localhost:4200")

	public Fournisseur getFour(@PathVariable Long id )
	{
		return fournisseurservice.getFour(id);}
	
	@DeleteMapping("/supprim-fournisseur/{id}")
	@CrossOrigin(origins = "http://localhost:4200")

	public void supprimFour(@PathVariable Long id)
	{
		fournisseurservice.supprimFournisseur(id);
	}
	@PostMapping("modif/fournisseur")
	@CrossOrigin(origins = "http://localhost:4200")

	public Fournisseur modifFournisseur(@RequestBody Fournisseur f )
	{
		return fournisseurservice.modifFour(f);}
}
