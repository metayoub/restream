import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';

import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown icon="th-list" name="Entities" id="entity-menu" data-cy="entity" style={{ maxHeight: '80vh', overflow: 'auto' }}>
    <MenuItem icon="asterisk" to="/chaine">
      Chaine
    </MenuItem>
    <MenuItem icon="asterisk" to="/chemin">
      Chemin
    </MenuItem>
    {props.isAuthenticated && props.isAdmin && (
      <MenuItem icon="asterisk" to="/categorie">
        Categorie
      </MenuItem>
    )}
    {props.isAuthenticated && props.isAdmin && (
      <MenuItem icon="asterisk" to="/tag">
        Tag
      </MenuItem>
    )}
    {props.isAuthenticated && props.isAdmin && (
      <MenuItem icon="asterisk" to="/report">
        Report
      </MenuItem>
    )}
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
