package org.iset.Service;

import java.util.List;

import org.iset.entities.Fournisseur;

public interface IFournisseur {
	Fournisseur addFournisseur(Fournisseur e);
	List<Fournisseur> getAllFournisseur();
	void supprimFournisseur(Long id);
	Fournisseur getFour(Long id);
	 Fournisseur modifFour(Fournisseur e);
}
