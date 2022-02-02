package org.iset.Service;

import java.util.List;

import org.iset.Repositories.AdminRepository;
import org.iset.entities.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Service
public class AdminService implements IAdmin{
@Autowired	
AdminRepository adR;

public AdminService(AdminRepository adR) {
	super();
	this.adR = adR;
}

@Override
public List<Admin> getAll()
{  
	return adR.findAll();
}
@Override
public Admin addAdmin(Admin ad)
{
	return adR.save(ad);
}
@Override
public void delete(Long id)
{
adR.deleteById(id);
}

@Override
public Admin modifAdmin(Admin ad)
{
	 adR.save(ad);
	 return ad;
}
@Override
public Admin recherche(Long id_ad)
{
	return adR.findById(id_ad).get();
}
}