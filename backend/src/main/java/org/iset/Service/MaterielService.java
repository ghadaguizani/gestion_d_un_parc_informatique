package org.iset.Service;

import java.util.List;

import org.iset.Repositories.MaterielRepository;
import org.iset.entities.Materiel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class MaterielService implements IMateriel {
	public MaterielService(MaterielRepository maR) {
		super();
		this.maR = maR;
	}

	@Autowired
MaterielRepository maR;

	
	@Override
	public Materiel addMateriel(Materiel m)
	{
		return maR.save(m);
	}
	@Override

	public List<Materiel> getAllMateriel()
	{
		return maR.findAll();
	}

	@Override
	public void supprimMateriel(Long id)
	{
		maR.deleteById(id);
	}

	@Override
	public Materiel getMat(Long id)
	{
		return maR.findById(id).get();
	}

	@Override
	public Materiel modifMat(Materiel m)
	{
		 maR.save(m);
		 return m;
	}


}
