package org.iset.Controller;

import java.util.List;

import org.iset.Service.InterventionService;
import org.iset.entities.Intervention;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
public class InterventionController {
	@Autowired
InterventionService inS;

	public InterventionController(InterventionService inS) {
		super();
		this.inS = inS;
	}
	@GetMapping("/interventions")
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Intervention> getAll()
	{
		return inS.getAll();
	}
	@PostMapping("/add-inter")
	@CrossOrigin(origins = "http://localhost:4200")
	public Intervention addInter(@RequestBody Intervention i)
	{
		return inS.addInter(i);
	}
	@DeleteMapping("/supprim-inter{id}")
	@CrossOrigin(origins = "http://localhost:4200")

	public void supprimInter(@PathVariable Long id)
	{
		inS.supprimInter(id);
	}
	@GetMapping("/intervention/{id}")
	@CrossOrigin(origins = "http://localhost:4200")

	public Intervention getInter(@PathVariable Long id)
	{
		return inS.getInter(id);
	}
	@PutMapping("/modif-inter")
	@CrossOrigin(origins = "http://localhost:4200")

	public Intervention modifInter(@RequestBody Intervention i)
	{
		return inS.modifInter(i);
	}
}
