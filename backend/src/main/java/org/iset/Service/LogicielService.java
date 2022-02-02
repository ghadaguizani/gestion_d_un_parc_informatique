package org.iset.Service;

import java.util.List;

import org.iset.Repositories.LogicielRepository;
import org.iset.entities.Fournisseur;
import org.iset.entities.Logiciel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LogicielService implements ILogiciel {
	@Autowired
	LogicielRepository lgR;

	public LogicielService(LogicielRepository lgR) {
		super();
		this.lgR = lgR;
	}
	@Override
	public Logiciel addLogiciel(Logiciel l)
	{
		return lgR.save(l);
	}
	@Override
	public List<Logiciel> getAllLogiciel()
	{
		return lgR.findAll();
	}
	@Override
	public void supprimLogiciel(Long id)
	{
		lgR.deleteById(id);
	}
	@Override
	public Logiciel getLog(Long id)
	{
		return lgR.findById(id).get();
	}
	@Override
	public Logiciel modifLog(Logiciel l)
	{
		lgR.save(l);
		return l;
	}

}
