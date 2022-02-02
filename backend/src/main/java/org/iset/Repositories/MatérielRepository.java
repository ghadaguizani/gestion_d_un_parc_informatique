package org.iset.Repositories;

import org.iset.entities.Matériel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface MatérielRepository extends JpaRepository<Matériel, Long> {

}
