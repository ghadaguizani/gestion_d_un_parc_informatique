package org.iset.Service;

import java.util.List;

import org.iset.Repositories.MatérielRepository;
import org.iset.Repositories.ProfesseurRepository;
import org.iset.entities.Professeur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfesseurService implements IProfesseur {
	ProfesseurRepository prR;

	public ProfesseurService(ProfesseurRepository prR) {
		super();
		this.prR = prR;
	}
	@Override
	public Professeur addProfesseur(Professeur p)
	{
		return prR.save(p);
	}
	@Override
	public List<Professeur> getAllProfesseur()
	{
		return prR.findAll();
	}
	@Override
	public void supprimProfesseur(Long id)
	{
		prR.deleteById(id);
	}
	@Override
	public Professeur getProf(Long id)
	{
		return prR.findById(id).get();
	}
	@Override
	public Professeur modifProf(Professeur p)
	{
		prR.save(p);
		return p;
	}
	
}
