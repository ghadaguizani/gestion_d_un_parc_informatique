package org.iset.Service;

import java.util.List;

import org.iset.Repositories.EtudiantRepository;
import org.iset.entities.Etudiant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EtudiantService  implements IEtudiant {
	@Autowired	
	EtudiantRepository etR;

	public EtudiantService(EtudiantRepository etR) {
		super();
		this.etR = etR;
	}
	@Override
	public Etudiant addEtudiant(Etudiant e)
	{
		return etR.save(e);
	}
	@Override
	public List<Etudiant> getAllEtudiant()
	{
		return etR.findAll();
	}
	@Override
	public void supprimEtudiant(Long id)
	{
		etR.deleteById(id);
	}
	@Override
	public Etudiant getEtud(Long id)
	{
		return etR.findById(id).get();
	}
	@Override
	public Etudiant modifEtud(Etudiant e)
	{
		 etR.save(e);
		 return e;
	}
}
