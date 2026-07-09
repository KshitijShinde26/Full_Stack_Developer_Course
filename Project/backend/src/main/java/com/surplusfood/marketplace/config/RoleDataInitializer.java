package com.surplusfood.marketplace.config;

import com.surplusfood.marketplace.entity.Role;
import com.surplusfood.marketplace.entity.RoleName;
import com.surplusfood.marketplace.repository.RoleRepository;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class RoleDataInitializer implements CommandLineRunner {

    private final RoleRepository roleRepository;

    @Override
    public void run(String... args) {
        Map<RoleName, String> descriptions = Map.of(
                RoleName.ROLE_ADMIN, "Platform administrator",
                RoleName.ROLE_BUSINESS_OWNER, "Business account that lists surplus food",
                RoleName.ROLE_CONSUMER, "Consumer account that buys discounted food",
                RoleName.ROLE_NGO, "NGO or shelter account that claims donations"
        );

        descriptions.forEach((roleName, description) -> roleRepository.findByName(roleName)
                .orElseGet(() -> {
                    Role role = new Role();
                    role.setName(roleName);
                    role.setDescription(description);
                    return roleRepository.save(role);
                }));
    }
}
