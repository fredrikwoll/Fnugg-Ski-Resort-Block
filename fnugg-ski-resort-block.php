<?php
/**
 * Plugin Name: Fnugg Ski Resort Block
 * Plugin URI: https://github.com/fredrikwoll/fnugg-ski-resort-block
 * Description: Simple ski resort block that return data from Fnugg API.
 * Version: 1.0.0
 * Author: Fredrik Woll
 * Author URI: https://woll.dev/
 * License: GPL-3.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-3.0.en.html
 *
 **/
namespace Fnugg_Ski_Resort;

defined( 'ABSPATH' ) || exit;


function register_block() {
 
    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
 
    wp_register_script(
        'fnugg-ski-resort-block',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
 
    register_block_type( 'fnugg/ski-resort-block', array(
        'editor_script' => 'fnugg-ski-resort-block',
    ) );
 
}
add_action( 'init', __NAMESPACE__ .'\\register_block' );


function register_frontend() {
 
    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/frontend.asset.php');
 
    wp_enqueue_script(
        'fnugg-ski-resort-block-frontend',
        plugins_url( 'build/frontend.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );
 
}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ .'\\register_frontend' );

add_action('enqueue_block_assets', __NAMESPACE__ .'\\enqueue_style');

function enqueue_style(){
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/frontend.asset.php');

    wp_enqueue_style(
        'fnugg-ski-resort-block-style',
        plugins_url( 'build/style.css', __FILE__ ),
        $asset_file['version']
    );
}


/**
 * This is our callback function to return our products.
 *
 * @param WP_REST_Request $request This function accepts a rest request to process data.
 */
function query_resorts_autocomplete( $request ) {
    // In practice this function would fetch the desired data. Here we are just making stuff up.
    $parms = $request->get_params();
    $endpoint = 'https://api.fnugg.no/suggest/autocomplete?q='.$parms['q'];

    $response = wp_remote_get($endpoint);
    $responseBody = wp_remote_retrieve_body( $response );
    $result = json_decode( $responseBody );
    

    return rest_ensure_response( $result );

}

/**
 * This is our callback function to return our products.
 *
 * @param WP_REST_Request $request This function accepts a rest request to process data.
 */
function query_resorts( $request ) {
    // In practice this function would fetch the desired data. Here we are just making stuff up.
    $parms = $request->get_params();
    $endpoint = 'https://api.fnugg.no/search/?q='.$parms['q'];

    $response = wp_remote_get($endpoint);
    $responseBody = wp_remote_retrieve_body( $response );
    $result = json_decode( $responseBody );
    

    return rest_ensure_response( $result );

}

 
/**
 * This function is where we register our routes for our example endpoint.
 */
function resort_routes() {

    register_rest_route( 'fnugg/v1', '/resorts', array(
        array(
            // By using this constant we ensure that when the WP_REST_Server changes, our readable endpoints will work as intended.
            'methods'  => \WP_REST_Server::READABLE,
            // Here we register our callback. The callback is fired when this endpoint is matched by the WP_REST_Server class.
            'callback' => __NAMESPACE__ .'\\query_resorts',

        ),
    ) );

    register_rest_route( 'fnugg/v1', '/resorts/autocomplete', array(
        array(
            // By using this constant we ensure that when the WP_REST_Server changes, our readable endpoints will work as intended.
            'methods'  => \WP_REST_Server::READABLE,
            // Here we register our callback. The callback is fired when this endpoint is matched by the WP_REST_Server class.
            'callback' => __NAMESPACE__ .'\\query_resorts_autocomplete',

        ),
    ) );
}
 
add_action( 'rest_api_init', __NAMESPACE__ .'\\resort_routes' );