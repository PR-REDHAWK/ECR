import 'dotenv/config';
import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
  host: 'ep-muddy-night-a4arz885-pooler.us-east-1.aws.neon.tech',
  port: 5432,
  user: 'neondb_owner',
  password: 'npg_s6rjR2PovVKD',
  database: 'neondb',
  ssl: {
    rejectUnauthorized: false,
  },
  family: 4,
  connectionTimeoutMillis: 10000,
});

pool.connect()
  .then(() => console.log('PostgreSQL connected'))
  .catch((err) => console.error('Database connection failed:', err));

export default pool;