package org.iset.Service;

import java.util.List;

import org.iset.entities.Logiciel;

public interface ILogiciel {
	Logiciel addLogiciel(Logiciel l);
	List<Logiciel> getAllLogiciel();
	void supprimLogiciel(Long id);
	Logiciel getLog(Long id);
	Logiciel modifLog(Logiciel l);
}
