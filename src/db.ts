import { Pool } from 'pg';

// Created on https://api.elephantsql.com/ free account for testing
const connectionString = 'postgres://oszuxgvk:AmNzoEYh0ave9xcQt6QIz1WctLUNJAZ-@suleiman.db.elephantsql.com/oszuxgvk';

const db = new Pool({ connectionString });

export default db;