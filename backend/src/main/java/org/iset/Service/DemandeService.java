package org.iset.Service;

import java.util.List;

import org.iset.Repositories.DemandeRepository;
import org.iset.entities.Demande;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class DemandeService implements IDemande {
@Autowired
DemandeRepository deR;

	public DemandeService() {
	super();
	// TODO Auto-generated constructor stub
}

	public DemandeService(DemandeRepository deR) {
	super();
	this.deR = deR;
}

	@Override
	public List<Demande> getAll() {
		// TODO Auto-generated method stub
		return deR.findAll();
	}

	@Override
	public Demande getDemande(Long id) {
		// TODO Auto-generated method stub
		return deR.findById(id).get();
	}

	@Override
	public Demande modifDemande(Demande d) {
		// TODO Auto-generated method stub
		return deR.save(d);
	}

	@Override
	public Demande addDemande(Demande d)
	{
		return deR.save(d);
	}

	@Override
	public void supprimDemande(Long id) {
		// TODO Auto-generated method stub
		deR.deleteById(id);
	}

}
