package org.iset.Service;

import java.util.List;

import org.iset.entities.Etudiant;

public interface IEtudiant {
	Etudiant addEtudiant(Etudiant e);
	List<Etudiant> getAllEtudiant();
	void supprimEtudiant(Long id);
	Etudiant getEtud(Long id);
	Etudiant modifEtud(Etudiant e);
}
