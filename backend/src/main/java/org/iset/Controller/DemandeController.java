package org.iset.Controller;

import java.util.List;

import org.iset.Service.DemandeService;
import org.iset.entities.Demande;
import org.iset.entities.Logiciel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class DemandeController {
	@Autowired
	DemandeService deS;

	public DemandeController(DemandeService deS) {
		super();
		this.deS = deS;
	}
	@GetMapping("/demandes")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Demande> getAll()
	{
		return deS.getAll();
	}
	@GetMapping("/demande/{id}")
	@CrossOrigin(origins = "http://localhost:4200")

	public Demande getDemande(@PathVariable Long id)
	{
		return deS.getDemande(id);
	}
	@PostMapping("/add-demande")
	@CrossOrigin(origins = "http://localhost:4200")

	public Demande addDemande(@RequestBody Demande d)
	{
		return deS.addDemande(d);
	}
	
	@PutMapping("/modif-demande")
	@CrossOrigin(origins = "http://localhost:4200")

	public Demande modifDemande(@RequestBody Demande d) 
	{
		return deS.modifDemande(d);
	}
	@DeleteMapping("/supprim-demande/{id}")
	@CrossOrigin(origins = "http://localhost:4200")

	public void supprimDemand(@PathVariable Long id)
	{
		deS.supprimDemande(id);
	}

}
