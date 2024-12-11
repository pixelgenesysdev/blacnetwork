<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ztymdvte_wp668' );

/** Database username */
define( 'DB_USER', 'ztymdvte_wp668' );

/** Database password */
define( 'DB_PASSWORD', 'Sp[d4)j716' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'v9oglpuod4fbzu772vmmkrjpbgtvtetsytrwa5tisz9dcwnfbrtjskavuk0r5r4r' );
define( 'SECURE_AUTH_KEY',  'x46wkxadgpbwharegldcuolloojrnnykjegdhtdwbgwtn9gdcpe8udcnj6gnlgdi' );
define( 'LOGGED_IN_KEY',    'owgvielaewarrodwe5ey1wlqsqz2ghxyfrketdpa1gyb0zz7s0ect6j6lg7rtydf' );
define( 'NONCE_KEY',        'i5lqbkqgwdctcsq0egdv2lde42zyu2o2t5hf9qrshpeflgmz1hodd4fw3caemi3v' );
define( 'AUTH_SALT',        'o4gcdgoaykswv8tkgs153zns9q18cudxu5qpiddbdlkb34dnnv9ppcome05iyzeg' );
define( 'SECURE_AUTH_SALT', 'ksqderkwufxc4kc8ptgt6ercln39vxsot7x6yw9mp3qnj9o3v17lgkaaznepbldl' );
define( 'LOGGED_IN_SALT',   'ciofbdydna5w6vrk8o15t7i84b4fceedhewsaj48jalaypapyj8nymmhplyc35qv' );
define( 'NONCE_SALT',       'nfvemqo4txfa7qo5wwniowatodoubn3azcq8vhoxqcijghaw61if8uwb4tsjbwce' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wpy3_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
