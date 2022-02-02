package org.iset.Service;

import java.util.List;

import org.iset.Repositories.InterventionRepository;
import org.iset.entities.Intervention;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InterventionService implements IIntervention{
	@Autowired
	InterventionRepository inR;
	public InterventionService(InterventionRepository inR) {
		super();
		this.inR = inR;
	}
	@Override
	public List<Intervention> getAll()
	{
		return inR.findAll();
	}
	@Override

	public Intervention getInter(Long id)
	{
		return inR.findById(id).get();
	}
	@Override
	public void supprimInter(Long id) {
		// TODO Auto-generated method stub
		inR.deleteById(id);
	}
	@Override
	public Intervention addInter(Intervention i) {
		// TODO Auto-generated method stub
		return inR.save(i);
	}
	@Override
	public Intervention modifInter(Intervention i) {
		// TODO Auto-generated method stub
		return inR.save(i);
	}
	
	

}
