package org.iset.Repositories;

import org.iset.entities.Technicien;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface TechnicienRepository extends JpaRepository<Technicien, Long> {

}
