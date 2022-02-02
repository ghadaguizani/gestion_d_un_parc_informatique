package org.iset.Service;

import java.util.List;

import org.iset.Repositories.TechnicienRepository;
import org.iset.entities.Technicien;

public interface ITechnicien {

     Technicien addTechnicien(Technicien t);
	 List<Technicien> getAllTechnicien();
	 void supprimTechnicien(Long id);
	 Technicien getTech(Long id);
	 Technicien modifTech(Technicien t);
	
}
