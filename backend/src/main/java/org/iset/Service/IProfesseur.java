package org.iset.Service;

import java.util.List;

import org.iset.entities.Professeur;

public interface IProfesseur {
	Professeur addProfesseur(Professeur p);
	List<Professeur> getAllProfesseur();
	void supprimProfesseur(Long id);
	Professeur getProf(Long id);
	Professeur modifProf(Professeur m);
}
