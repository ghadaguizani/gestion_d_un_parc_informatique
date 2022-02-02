package org.iset.Service;

import java.util.List;

import org.iset.Repositories.EtudiantRepository;
import org.iset.Repositories.FournisseurRepository;
import org.iset.entities.Etudiant;
import org.iset.entities.Fournisseur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FournisseurService implements IFournisseur {
	@Autowired
	FournisseurRepository fouR;

	
	public FournisseurService(FournisseurRepository fouR) {
		super();
		this.fouR = fouR;
	}
	@Override
	public Fournisseur addFournisseur(Fournisseur e)
	{
		return fouR.save(e);
	}
	@Override
	public List<Fournisseur> getAllFournisseur()
	{
		return fouR.findAll();
	}
	@Override
	public void supprimFournisseur(Long id)
	{
		fouR.deleteById(id);
	}
	@Override
	public Fournisseur getFour(Long id)
	{
		return fouR.findById(id).get();
	}
	@Override
	public Fournisseur modifFour(Fournisseur e)
	{
		return fouR.save(e);
	}
}
