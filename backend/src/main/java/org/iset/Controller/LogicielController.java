package org.iset.Controller;

import java.util.List;

import org.iset.Service.LogicielService;
import org.iset.Service.MatérielService;
import org.iset.entities.Logiciel;
import org.iset.entities.Matériel;
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
public class LogicielController {
	@Autowired
	LogicielService logicielservice;
	
	
	public LogicielController(LogicielService logicielservice) {
		super();
		this.logicielservice = logicielservice;
	}
	@GetMapping("/logiciel")
	@CrossOrigin(origins = "http://localhost:4200")

	public List<Logiciel> getallLogiciel(){
		
		return (List<Logiciel>) logicielservice.getAllLogiciel() ;
		
	}
	@PostMapping("/add-logiciel")
	@CrossOrigin(origins = "http://localhost:4200")

	public Logiciel addLogiciel(@RequestBody Logiciel l)
	{
		return logicielservice.addLogiciel(l);
		}
	@GetMapping("/logiciel/{id}")
	@CrossOrigin(origins = "http://localhost:4200")

	public Logiciel getLog(@PathVariable Long id )
	{
		return logicielservice.getLog(id);}
	
	@DeleteMapping("/supprim-logiciel/{id}")
	@CrossOrigin(origins = "http://localhost:4200")

	public void supprimLog(@PathVariable("id") Long id)
	{
		logicielservice.supprimLogiciel(id);
	}
	@PostMapping("modif/logiciel")
	@CrossOrigin(origins = "http://localhost:4200")

	public Logiciel modifLogiciel(@RequestBody Logiciel l)
	{
		return logicielservice.modifLog(l);}
}
