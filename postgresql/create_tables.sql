-- Table: init.User

-- DROP TABLE init."User";

CREATE TABLE IF NOT EXISTS init."User"
(
	id serial PRIMARY KEY NOT NULL,
	username VARCHAR(255) UNIQUE NOT NULL
)
TABLESPACE pg_default;

DO $$
DECLARE
	x INTEGER;
BEGIN
	SELECT COUNT(*) FROM TestTable INTO x;
	IF x < 1 THEN
		INSERT INTO TestTable (username) VALUES ('Manin');
	END IF;
END $$;


ALTER TABLE init."User"
    OWNER to todotom;