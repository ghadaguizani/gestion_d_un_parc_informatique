package org.iset.Service;

import java.util.List;

import org.iset.entities.Intervention;

public interface IIntervention {
	List<Intervention> getAll();
	Intervention getInter(Long id);
	void supprimInter(Long id);
	Intervention addInter(Intervention i);
	Intervention modifInter(Intervention i);
	

}
