package org.iset.Service;

import java.util.List;

import org.iset.entities.Materiel;

public interface IMateriel {
	Materiel addMateriel(Materiel m);
	List<Materiel> getAllMateriel();
	void supprimMateriel(Long id);
	Materiel getMat(Long id);
	Materiel modifMat(Materiel m);
}
