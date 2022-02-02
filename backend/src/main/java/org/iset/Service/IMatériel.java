package org.iset.Service;

import java.util.List;

import org.iset.entities.Matériel;

public interface IMatériel {
	Matériel addMatériel(Matériel m);
	List<Matériel> getAllMatériel();
	void supprimMatériel(Long id);
	Matériel getMat(Long id);
	Matériel modifMat(Matériel m);
}
