package org.iset.Service;

import java.util.List;

import org.iset.Repositories.MatérielRepository;
import org.iset.entities.Logiciel;
import org.iset.entities.Matériel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatérielService implements IMatériel {
	@Autowired
MatérielRepository maR;

public MatérielService(MatérielRepository maR) {
	super();
	this.maR = maR;
}
@Override
public Matériel addMatériel(Matériel m)
{
	return maR.save(m);
}
@Override

public List<Matériel> getAllMatériel()
{
	return maR.findAll();
}
@Override
public void supprimMatériel(Long id)
{
	maR.deleteById(id);
}
@Override
public Matériel getMat(Long id)
{
	return maR.findById(id).get();
}
@Override
public Matériel modifMat(Matériel m)
{
	 maR.save(m);
	 return m;
}
}
